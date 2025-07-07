// EventEmitter.js
class EventEmitter {

  #events:any;

  constructor() {
    this.#events = {};
  }
  on(event:string, listener:any) {
    if (!this.#events[event]) {
      this.#events[event] = [];
    }
    this.#events[event].push(listener);
  }
  off(event:string, listener:any) {
    if (!this.#events[event]) return;
    this.#events[event] = this.#events[event].filter(l => l !== listener);
  }
  emit(event:string, data:any) {
    const listeners = this.#events[event];
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }
}

export const eventEmitter = new EventEmitter();
