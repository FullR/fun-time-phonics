import defer from "../defer";

export default function stoppableCo(genFn) {
  return function() {
    const deferred = defer();
    const itr = genFn(...arguments);
    let stopped = false;

    function runNext(inputValue) {
      if(!stopped) {
        const {value, done} = itr.next(inputValue);
        if(done) {
          deferred.resolve(value);
        } else if(value && typeof value.then === "function") {
          Promise.resolve(value).then(runNext);
        } else {
          runNext(value);
        }
      }
    }

    runNext();

    return {
      promise: deferred.promise,
      stop() {
        stopped = true;
        deferred.resolve();
      }
    };
  };
};
