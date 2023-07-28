/**
 * 枚举类型：enum关键字
 */

// 使用enum定义Color对象中的枚举，默认输出Color里面定义的属性，就是输出其索引的位置。
enum Color {
  red,
  green,
  blue,
}

// 给某个属性一个初始值（数字），那么之后的几个枚举值的索引就会跟着增长，前面的保持不变
enum Color1 {
  red = 1,
  green,
  blue,
}

// 给某个属性一个初始值（字符串）时，必须把所有的枚举成员全部都定义一遍
enum Color2 {
  red = "red",
  green = "green",
  blue = "blue",
}

// 接口枚举：定义一个接口进行枚举
interface A {
  red: Color.red;
}
let params: A = {
  red: 0,
};

// const枚举。
// 使用const枚举的时候，会直接把Types.枚举值编译成其索引（0，1，2），不编译Types本身
// 不使用const的时候，会把Types编译成一个对象，然后再进行匹配。
const enum Types {
  success,
  fail,
}

let code: number = 0;

if (code === Types.success) {
  console.log(code);
}

// 反向映射:可以从key读value,也可以从value读key,但是必须不能被const进行修饰
enum Test {
  success,
}
// 从key读value
let success: number = Test.success;
// 从value读key
let key: string = Test[success];
console.log(success, key);
