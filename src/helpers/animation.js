import {Observable} from "rx";
import {isNumber, transform, extend, merge} from "lodash";
import {mergeState, extendState} from "util/state";

function wait(ms) {
  return Observable.create((observer) => {
    const timeout = setTimeout(() => {
      observer.onNext();
      observer.onCompleted();
    }, ms);

    return clearTimeout.bind(null, timeout);
  });
}

function state(component, source) {
  const stateQueue = component._stateQueue || (component._stateQueue = []);
  stateQueue.push(source || {});
}

function resolveStateQueue(component) {
  if(component._stateQueue) {
    const stateQueue = component._stateQueue;
    component._stateQueue = [];
    requestAnimationFrame(() => component.setState(merge({}, component.state, ...stateQueue)));
  }
}

function beginSpeaking(component, who) {
  mergeState(component, {
    [who]: {speaking: true, animating: false}
  });
}

function endSpeaking(component, who) {
  mergeState(component, {
    [who]: {speaking: false, animating: false}
  });
}

function say(component, who, sound, delay) {
  const soundObservable = Observable.create((observer) => {
    const disposable = sound.observable.subscribe(observer);
    mergeState(component, {
      [who]: {speaking: true, animating: true}
    });
    return () => {
      disposable.dispose();
      mergeState(component, {
        [who]: {animating: false}
      });
    }
  });

  if(delay) {
    return wait(delay).flatMap(() => soundObservable);
  } else {
    return soundObservable;
  }
}

function mergeChoice(component, key, source) {
  mergeState(component, {
    choices: {
      [key]: source
    }
  });
}

/*
  mergeChoices modifies multiple choices at onces
  
  an optional predicate function can be passed to filter out only the
  choices that need to be modified

  if an array is passed instead of a predicate function, the choices
  will only be modified if their key is in the array
*/
function mergeChoices(component, source, predicateFn) {
  return mergeState(component, {
    choices: transform(component.state.choices, (newChoices, choice, key) => {
     if(!predicateFn || predicateFn(choice, key)) {
        newChoices[key] = source;
      }
    })
  });
}

function hideChoice(component, key) {
  mergeChoice(component, key, {hidden: true});
}

function whitelistPredicate(keys) {
  return (value, key) => {
    console.log(typeof key, keys);
    return !keys || !keys.length || keys.indexOf(key) !== -1;
  };
}

function falsyProp(key) {
  return (v) => (v && !v[key]);
}

function truthyProp(key) {
  return (v) => (v && v[key]);
}

function and(fn1, fn2) {
  return (v, i) => (fn1(v, i) && fn2(v, i));
}

/*
  These methods are meant to be used with the es7 function bind syntax.
  For example:

    this::say("owl", welcome);
*/
export default {
  wait,

  say(who, sound, delay) {
    return say(this, who, sound, delay);
  },

  /*
    Allows multiple sounds to be played in series
    Numbers are interpretted as delays

    Example:
      this::sayEach("owl", 
        sound1,
        2000,
        sound2,
        1000,
        sound3
      )
  */
  sayEach(who, ...sounds) {
    return sounds.reduce((observable, sound) => {
      const next = isNumber(sound) ?
        () => wait(sound) :
        () => say(this, who, sound);

      return observable.flatMap(next);
    }, Rx.Observable.just(null));
  },

  beginSpeaking(who) {
    beginSpeaking(this, who);
  },

  endSpeaking(who) {
    endSpeaking(this, who);
  },

  owlSay(sound, delay) {
    return say(this, "owl", sound, delay);
  },

  teacherSay(sound, delay) {
    return say(this, "teacher", sound, delay);
  },

  hideChoices(...keys) {
    mergeChoices(this, {hidden: true}, and(
      whitelistPredicate(keys), 
      falsyProp("hidden")
    ));
    //mergeChoices(this, {hidden: true});
    // mergeState(this, {
    //   choices: transform(this.state.choices, (result, choice, key) => {
    //     result[key] = {hidden: true};
    //   })
    // });

    // extendState(this, {
    //   choices: transform(this.state.choices, (result, choice, key) => {
    //     result[key] = {...choice, hidden: true};
    //   })
    // })
  },

  revealChoices(...keys) {
    mergeChoices(this, {hidden: false}, and(
      whitelistPredicate(keys),
      truthyProp("hidden")
    ));
  },

  detachChoices(...keys) {
    mergeChoice(this, {detached: true}, and(
      whitelistPredicate(keys),
      falsyProp("detached")
    ));
  },

  attachChoices(...keys) {
    mergeChoices(this, {detached: false}, and(
      whitelistPredicate(keys),
      truthyProp("detached")
    ));
  },

  hideChoice(key) {
    mergeChoice(this, key, {hidden: true});
  },

  revealChoice(key) {
    mergeChoice(this, key, {hidden: false});
  },

  detachChoice(key) {
    mergeChoice(this, key, {detached: true});
  },

  attachChoice(key) {
    mergeChoice(this, key, {detached: false});
  }
};
