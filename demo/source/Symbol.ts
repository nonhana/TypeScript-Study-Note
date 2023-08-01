/**
 * Symbol类型
 * 表示唯一的意思。
 */

namespace SymbolType {
  // 定义Symbol类型变量
  let a11: Symbol = Symbol(1);
  let a22: Symbol = Symbol(1);

  // 使用for关键字来比较两个symbol里面的值
  // for关键字会在全局的Symbol之中找有没有注册过这个key,如果有就会直接拿来用;没有的话直接创建一个.
  console.log(Symbol.for("non_hana") === Symbol.for("non_hana"));

  // 具体使用场景:解决key重复的问题.
  let obj1 = {
    name: "non_hana",
    a11: 111,
    a22: 222,
  };

  console.log(obj1);

  // for...in不能读到symbol
  // Object.keys不能读到symbol
  // Object.getOwnPropertyNames不能读到symbol
  // Object.getOwnPropertySymbols只能读到symbol
  // 一次性取到所有的key和symbol:Reflect.ownKeys
  console.log(Reflect.ownKeys(obj1));

  // 1. 生成器,和迭代器用法一样,只是写法不同
  function* gen() {
    // 使用yield关键字声明变量
    // 后面可以跟同步或者异步的方法,也可以写多个
    yield "non_hana1";
    yield "non_hana2";
    yield "non_hana3";
    yield "non_hana4";
    yield "non_hana5";
  }

  const me = gen();
  // 使用.next()方法调用生成器中的yield变量,每调用一次,就向下取一次变量
  console.log(me.next());

  // 2. 迭代器,能够一次性遍历所有的类型.

  // ES6新增的数据类型:set,map
  // set就是数学概念中的集合,具有天然去重的特性
  let set: Set<number> = new Set([1, 1, 2, 3, 4, 4, 5]);
  // map就是一个哈希表,存储键值对.它的键可以是任意类型,引用类型和基本类型都可以.
  let map: Map<any, any> = new Map();

  // 迭代器的自行定义↓
  const each = (value: any) => {
    // 此处的It是一个函数，[Symbol.iterator]是每一个类型的变量都具有的方法。
    let It: any = value[Symbol.iterator]();
    let next: any = { done: false };
    while (!next.done) {
      next = It.next();
      if (!next.done) {
        console.log(next.value);
      }
    }
  };
  each(map);

  // 迭代器语法糖：就是经常用的for...of，它的底层就是iterator
  // for...of不能用到对象里面，因为对象里面没有interator
  for (let value of set) {
    console.log(value);
  }

  // TS/JS中的解构语法的底层也是iterator。
  let [a, b, c] = [4, 5, 6];
  let [...list] = [1, 2, 3];

  // 让自己定义的对象也能够支持iterator：手动实现[Symbol.iterator]()函数
  let obj2 = {
    max: 5,
    current: 0,
    [Symbol.iterator]() {
      return {
        max: this.max,
        current: this.current,
        next() {
          if (this.current === this.max) {
            return {
              value: undefined,
              done: true,
            };
          } else {
            return {
              value: this.current++,
              done: false,
            };
          }
        },
      };
    },
  };
}
