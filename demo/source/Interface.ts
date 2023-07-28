/**
 * interface是一种用于定义对象的结构和类型的抽象机制。
 * 它允许您描述对象应该具有的属性和方法，但并不提供实际的实现细节。
 *
 * 1. 当定义的两个interface重名时，会自动合并两个interface的属性
 * 2. 当不知道这个interface中到底要定义什么属性时，使用索引签名来定义任意多的key
 * 3. 当某个属性可有可无，就可以直接使用?可选操作符
 * 4. 当某个属性为只读属性，就可以在定义interface的时候使用readonly关键字进行修饰
 * 5. 接口继承：使用extends关键字实现接口继承，也就是将接口合并。可以继承多个。
 * 6. 定义函数的类型：(参数:类型):返回值类型
 */

// 定义接口B
interface B {
  non_hana: boolean;
}

// 定义接口Demo，它继承自接口B
interface Demo extends B {
  readonly id: number;
  name: string;
  age: number;
  readonly callback: () => {};
}

// 使用索引签名定义接口Demo的任意多的key
interface Demo {
  [key: string]: any;
}

// 定义函数的类型Fn
interface Fn {
  (name: string): number[];
}

// 创建一个满足Demo接口的对象
let a: Demo = {
  id: 1,
  name: "non_hana",
  age: 18,
  non_hana: true,
  callback: () => {
    return 1;
  },
  // 可以添加任意多的key-value对
  additionalProperty: "This is an additional property",
};

// 定义一个满足Fn接口的函数
const myFunction: Fn = (name: string) => {
  return [1, 2, 3];
};

// 调用函数
const result = myFunction("Alice");
console.log(result); // 输出: [1, 2, 3]
