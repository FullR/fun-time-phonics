// Used to ensure multiple processes will happen in series with one another rather
// than in parallel

export default class Queue {
  constructor() {
    this.promise = Promise.resolve();
  }

  enqueue(fn) {
    this.promise = this.promise.then(fn);
    return this.promise;
  }
}
