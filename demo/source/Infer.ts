/**
 * Infer关键字
 * infer是TS新增的关键字，充当占位符的作用，用于推断类型
 */

namespace Infer {
  // 定义一个类型，如果是数组类型就返回数组元素的类型
  // 否则，传入什么类型返回什么类型
  type TYPE<T> = T extends Array<any> ? T[number] : T;
  type A = TYPE<number>; // number
  type B = TYPE<(string | number)[]>; // string | number

  // 使用infer关键字加以改写
  // infer关键字的作用就是让TS自己去推断类型
  // 在此处，TS会自己去推断T是不是一个数组类型，如果是数组类型，就返回数组元素的类型
  type TYPE2<T> = T extends Array<infer U> ? U : T;
  type C = TYPE2<number>; // number
  type D = TYPE2<(string | number)[]>; // string | number

  // infer类型提取
  // 1. 提取头部元素
  type Arr = ["A", "B", "C"];
  type First<T extends Array<any>> = T extends [infer U, ...any[]] ? U : never;
  type E = First<Arr>; // "A"
  // 2. 提取尾部元素
  type Tail<T extends Array<any>> = T extends [...any[], infer U] ? U : [];
  type F = Tail<Arr>; // "C"
  // 3. 剔除最后一个元素
  type Pop<T extends Array<any>> = T extends [...infer U, any] ? U : [];
  type G = Pop<Arr>; // ["A", "B"]

  // 使用infer反转数组
  // 其实就是使用递归，不断的把第一个放到后面去
  type ReverArr<T extends any[]> = T extends [infer First, ...infer Rest]
    ? [...ReverArr<Rest>, First]
    : T;

  type Arr1 = [1, 2, 3, 4, 5];

  type H = ReverArr<Arr1>; // [5, 4, 3, 2, 1]
}
