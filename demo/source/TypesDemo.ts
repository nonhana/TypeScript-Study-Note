/**
 * TypeScript中的变量类型，从上到下依次覆盖(上面的包含下面的)
 * 1. 顶级类型：top，unknown。
 * 2. Object
 * 3. Number String Boolean ... (首字母大写)
 * 4. number string boolean ... (首字母小写)
 * 5. 常量：1 "non_hana" true
 * 6. 底层类型：never
 * 
 * unknown类型和any类型的区别：
 * 1. unknown只能赋值给自身或者是any
 * 2. unknown没有办法读任何属性，并且方法也不可以调用
 * 3. unknown必any类型更加安全
 * 
 * object Object {}三个类型的区别
 * 1. object可以筛选出所有的引用类型。一般常用于泛型约束
 * 2. Object就是所有类型的顶层，包含下方的所有类型
 * 3. let a:{}相当于let a = new Object();作用和第一个Object其实是一样的。
 * 但是使用第三种方法定义的类型，无法对其再进行增加属性的操作。
 */

namespace TypesDemo {
  let a1: Object = 123;
  let a2: Object = "123";
  let a3: Object = [];

  // let b1:object = '123' // 错误，字符串是原始类型
  // let b2:object = 123 // 错误，数字是原始类型
  // let b3:object = true // 错误，布尔值是原始类型
  let b4: object = []; // 正确
  let b5: object = {}; // 正确
  let b6: object = () => {}; // 正确
}
