/**
 * Proxy & Reflect的用法
 * Proxy(代理):13种方法 参数一模一样
 * Reflect(反射):13种方法 参数一模一样
 */

namespace ProxyReflect {
  /* 
  // 1. Proxy
  let person = { name: "non_hana", age: 20 };
  // proxy只支持：对象、数组、函数、Set、Map
  let proxy = new Proxy(person, {
    // proxy可以拦截取值操作
    // 参数：target:原对象,key:属性名,receiver:Proxy或者继承Proxy的对象
    get(target, key, receiver) {
      if (target.age <= 18) {
        return Reflect.get(target, key, receiver);
      } else {
        return "non_hana";
      }
    },
    // proxy可以拦截赋值操作
    // target:原对象,key:属性名,value:属性值,receiver:Proxy或者继承Proxy的对象
    set(target, key, value, receiver) {
      return true;
    },
    // apply的作用是拦截函数的调用、call和apply操作
    // 参数：target:目标对象,thisArg:目标对象的上下文对象,args:目标对象的参数数组
    apply(target, thisArg, arg) {},
    // has的作用是拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效
    // 参数：target:目标对象,key:属性名
    has(target, key) {
      return true;
    },
    // ownKeys方法用来拦截对象自身属性的读取操作。具体来说，拦截for...in循环
    // 参数：target:目标对象
    ownKeys(target) {
      return [];
    },
    // construct方法用于拦截new命令
    // 参数：target:目标对象,args:构造函数的参数对象,newTarget:创造实例对象时，new命令作用的构造函数
    construct(target, args, newTarget) {
      return {};
    },
    // deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除
    // 参数：target:目标对象,key:属性名
    deleteProperty(target, key) {
      return true;
    },
    // defineProperty方法拦截了Object.defineProperty操作
    // 参数：target:目标对象,key:属性名,descriptor:属性描述对象
    defineProperty(target, key, descriptor) {
      return true;
    },
    // getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined
    // 参数：target:目标对象,key:属性名
    getOwnPropertyDescriptor(target, key) {
      return {};
    },
    // getPrototypeOf方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作
    // Object.prototype.__proto__
    // Object.prototype.isPrototypeOf()
    // Object.getPrototypeOf()
    // Reflect.getPrototypeOf()
    // instanceof
    // 参数：target:目标对象
    getPrototypeOf(target) {
      return {};
    },
    // isExtensible方法拦截Object.isExtensible操作
    // 参数：target:目标对象
    isExtensible(target) {
      return true;
    },
    // preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值
    // 参数：target:目标对象
    preventExtensions(target) {
      return true;
    },
    // setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法
    // 参数：target:目标对象,proto:原型对象
    setPrototypeOf(target, proto) {
      return true;
    },
  });
  console.log("proxy取数据", proxy.age);
  // 2. Reflect
  // Reflect的基本用法
  let simpleObj = {
    user_id: 1,
    user_name: "non_hana",
    user_age: 20,
    user_sex: "男",
  };
  console.log(Reflect.get(simpleObj, "user_name"));
  console.log(Reflect.set(simpleObj, "user_name", "non_hana2"));
  console.log(simpleObj);
  */

  // 实现一个观察者模式

  const eventList: Set<Function> = new Set();

  const autoRun = (callback: Function) => {
    if (!eventList.has(callback)) {
      eventList.add(callback);
    }
  };

  const observable = <T extends object>(params: T) => {
    return new Proxy(params, {
      set(target: T, key: string, value: any, receiver: any): boolean {
        const result = Reflect.set(target, key, value, receiver);
        eventList.forEach((event) => event());
        return result;
      },
    });
  };

  const personProxy = observable({
    name: "non_hana",
    age: 20,
  });

  autoRun(() => {
    console.log("changes");
  });

  personProxy.age = 123123;
}
