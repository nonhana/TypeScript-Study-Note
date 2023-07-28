interface FackEvent {
  on: (name: string, fn: Function) => void;
  emit: (name: string, ...args: Array<any>) => void;
  off: (name: string, fn: Function) => void;
  once: (name: string, fn: Function) => void;
}
interface List {
  [key: string]: Array<Function>;
}

class Dispatch implements FackEvent {
  list: List;
  constructor() {
    this.list = {};
  }
  on(name: string, fn: Function) {
    const callback = this.list[name] || [];
    callback.push(fn);
    this.list[name] = callback;
  }
  emit(name: string, ...args: Array<any>) {
    let eventName = this.list[name];
    if (eventName) {
      eventName.forEach((fn) => {
        fn.apply(this, args);
      });
    } else {
      console.error(`名称错误${name}`);
    }
  }
  off(name: string, fn: Function) {
    let eventName = this.list[name];
    if (eventName && fn) {
      let index = eventName.findIndex((fns) => fns === fn);
      eventName.splice(index, 1);
    } else {
      console.error(`名称错误${name}`);
    }
  }
  once(name: string, fn: Function) {
    let de = (...args: Array<any>) => {
      fn.apply(this, args);
      this.off(name, de);
    };
    this.on(name, de);
  }
}
