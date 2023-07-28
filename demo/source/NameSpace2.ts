// 在这个文件中引入在NameSpace1中抽离出去的命名空间
import { D } from "./NameSpace1";

namespace A {
  export namespace B {
    export const c = 1;
    export const d = D.e;
  }
}

console.log(A.B.d);
