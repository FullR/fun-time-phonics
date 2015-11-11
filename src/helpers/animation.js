import {Observable} from "rx";
import {isNumber, transform, extend, merge} from "lodash";
import {mergeState, extendState} from "util/state";
import wait from "util/delay";

function beginSpeaking(who) {
  mergeState(this, {
    [who]: {speaking: true, animating: false}
  });
}

function endSpeaking(who) {
  mergeState(this, {
    [who]: {speaking: false, animating: false}
  });
}

function center(who) {
  mergeState(this, {
    [who]: {centered: true, speaking: true}
  });
}

function uncenter(who) {
  mergeState(this, {
    [who]: {centered: false}
  });
}

function play(soundId, delay) {
  const sound = (typeof soundId === "string") ? this.props.sounds[soundId] : soundId;
  return delay ?
    wait(delay).flatMap(() => sound.observable) :
    sound.observable;
}

function say(who, soundId, delay) {
  const soundObservable = Observable.create((observer) => {
    const sound = (typeof soundId === "string") ? this.props.sounds[soundId] : soundId;
    let disposable;
    if(!sound) {
      logError(`Unable to find sound with id ${soundId} in this context`, this.props.sounds);
      observer.onNext();
      observer.onCompleted();
      return;
    } else {
      disposable = sound.observable.subscribe(observer);
    }
    mergeState(this, {
      [who]: {speaking: true, animating: true}
    });
    return () => {
      disposable.dispose();
      mergeState(this, {
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

function mergeChoice(key, source) {
  mergeState(this, {
    choices: {
      [key]: source
    }
  });
}

/*
  mergeChoices modifies multiple choices at onces

  an optional predicate function can be passed to filter out only the
  choices that need to be modified
*/
function mergeChoices(source, predicateFn) {
  this.setState({
    choices: transform(this.state.choices, (newChoices, choice, key) => {
      if(!predicateFn || predicateFn(choice, key)) {
        newChoices[key] = extend({}, choice, source);
      } else {
        newChoices[key] = choice;
      }
    })
  });
}

function mergeAllChoices(source) {
  this.setState({
    choices: merge({}, this.state.choices, source)
  });
}

function hideChoice(key) {
  this::mergeChoice(key, {hidden: true});
}

function hideChoices(...keys) {
  this::mergeChoices({hidden: true}, and(
    whitelistPredicate(keys),
    falsyProp("hidden")
  ));
}

function revealChoices(...keys) {
  this::mergeChoices({hidden: false, detached: false}, and(
    whitelistPredicate(keys),
    or(truthyProp("hidden"), truthyProp("detached"))
  ));
}

function detachChoices(...keys) {
  this::mergeChoices({detached: true}, and(
    whitelistPredicate(keys),
    falsyProp("detached")
  ));
}

function attachChoices(...keys) {
  this::mergeChoices({detached: false}, and(
    whitelistPredicate(keys),
    truthyProp("detached")
  ));
}

function hideChoice(key) {
  this::mergeChoice(key, {hidden: true});
}

function revealChoice(key) {
  this::mergeChoice(key, {hidden: false, detached: false});
}

function detachChoice(key) {
  this::mergeChoice(key, {detached: true, hidden: true});
}

function attachChoice(key) {
  this::mergeChoice(key, {detached: false});
}


/* Utility functions */

function whitelistPredicate(keys) {
  return (value, key) => {
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

function or(fn1, fn2) {
  return (v, i) => (fn1(v, i) || fn2(v, i));
}

/*
  These methods are meant to be used with the es7 function bind syntax.
  For example:

    this::say("owl", welcome);
*/
export default {
  beginSpeaking,
  endSpeaking,
  center,
  uncenter,
  play,
  say,
  mergeChoice,
  mergeChoices,
  mergeAllChoices,
  hideChoice,
  hideChoices,
  revealChoices,
  detachChoices,
  attachChoices,
  hideChoice,
  revealChoice,
  detachChoice,
  attachChoice
};
