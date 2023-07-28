/**
 * TypeScript类型兼容：协变、逆变、双向协变
 */

namespace TypeCompatible {
  // 主类型
  interface A {
    name: string;
    age: number;
  }
  // 子类型
  interface B {
    name: string;
    age: number;
    sex: string;
  }
  let a: A = {
    name: "a",
    age: 18,
  };
  let b: B = {
    name: "b",
    age: 19,
    sex: "男",
  };

  // 对于值的赋值来说，是协变
  // 只要子类型里面的属性完全覆盖主类型的属性，就可以把子类型赋值给主类型
  // 多出来的类型就不管了
  a = b;

  // 对于函数的赋值来说，是逆变
  // 主要原因是把某个函数赋值给原函数之后，调用原函数之后的操作是赋值给他的函数。
  // 所以原函数的参数类型必须是子类型的参数类型的父类型，这样才能保证赋值给他的函数的参数类型是原函数参数类型的子类型。
  let fna = (params: A) => {
    console.log(params);
  };
  let fnb = (params: B) => {
    console.log(params);
  };
  // 一般的逆变一定是安全的
  fnb = fna;
  // 双向协变：既可以是协变，也可以是逆变
  // 允许参数类型是父类型，返回值类型是子类型
  // 采用双向协变时，需要开启tsconfig中的strictFunctionTypes选项
  fna = fnb;
}
