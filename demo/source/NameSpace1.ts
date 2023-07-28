/**
 * 命名空间：NameSpace
 * 在TS和ECMA当中，如果不使用export和import，
 * 那么定义在单个文件中的变量均被视为是全局的。
 */

// 一般命名空间的定义
// 编译成js,其实就是在外面套了一层函数,然后把a作为一个属性赋给A.
namespace A {
  export const a = 1;
}

// 嵌套命名空间
namespace B {
  export namespace C {
    export const d = 5;
  }
}

// 抽离命名空间
// 其实也就是将一个命名空间进行导出,然后在其他文件中进行引用.
export namespace D {
  export const e = 6;
}

// 简化命名空间
// 有时候嵌套命名空间会嵌套很多层,可以用取别名的方法来简化命名空间
import BC = B.C;
console.log(BC.d);

// 合并命名空间
// 把重名的两个命名空间自动合在一起,和interface差不多.
namespace A {
  export const f = 1;
}
