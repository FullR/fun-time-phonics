// Used to ensure multiple processes will happen in series with one another rather
// than in parallel (using promises)

export default class Queue {
  constructor() {
    this.promise = Promise.resolve();
  }

  // takes a promise returning function and queues it to be run once the remaining functions in the queue finish
  enqueue(fn) {
    this.promise = this.promise.then(fn);
    return this.promise;
  }
}
