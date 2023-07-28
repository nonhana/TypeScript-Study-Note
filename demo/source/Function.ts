/**
 * 函数扩展。
 * 1. 函数定义类型和返回值 | 箭头函数类型定义和返回值
 * 2. 函数默认的参数 | 函数的可选参数
 * 3. 参数是一个对象的时候，如何定义？
 * 4. 函数的this类型
 * 5. 函数重载
 */

// 一般函数定义
function add1(a: number, b: number): number {
  return a + b;
}

// 箭头函数定义
const add2 = (a: number, b: number): number => {
  return a + b;
};

// 函数参数默认值，当自己不主动传值时就会调用默认值
// 函数可选参数的?不能和默认值一起用，会报错
function add3(a?: number, b: number = 20): number {
  return a + b;
}

// 参数为一个User对象
interface User {
  user_id: number;
  user_name: string;
}
function object(user: User): User {
  return user;
}

// 函数中的this类型
// 在ts中可以定义this的类型，一般来说就是自己所在对象的类型。
// 在js中无法使用。必须是第一个参数定义this的类型。
// 调用的时候，不用传this，只用传从第二个参数开始的参数
interface funcObj {
  user: number[];
  callback: (this: funcObj, num: number) => void;
}
let obj: funcObj = {
  user: [1, 2, 3],
  callback(this: funcObj, num: number) {
    this.user.push(num);
  },
};

// 函数重载，前面三个都是在为最后的一个实现作不同传参情况的定义，没有实现。
// 直到最后一个函数才将其实现，涵盖了上面的三种参数情况。
let users: number[] = [1, 2, 3];
function findNum(add: number[]): number[]; // 传入的是一个number类型的数组，就做添加
function findNum(id: number): number[]; // 传入的是一个id，就做查询操作
function findNum(): number[]; // 没有传入，就直接查全部
function findNum(ids?: number[] | number): number[] {
  if (typeof ids === "number") {
    return users.filter((v) => v === ids);
  } else if (Array.isArray(ids)) {
    users.push(...ids);
    return users;
  } else {
    return users;
  }
}
