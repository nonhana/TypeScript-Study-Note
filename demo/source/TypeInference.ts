/**
 * 类型推断 | 类型别名
 * 1. 类型推断是ts天然支持的,能够根据赋值来推断其类型.
 * 如果定义了变量不给他赋值,那么默认类型就是any.
 * 2. 类型别名就是type关键字,和interface有点像
 * type关键字可以定义联合类型 | ,交叉类型 & ,不能继承,不能重名
 */

namespace TypeInference {
  // 类型推断
  let array = [1, 2, 3, 4];
  let str = "non_hana";
  let nullItem = null;

  // 类型别名,给某种类型起名字.
  type array = number[];

  // 高级用法
  // extends左边的值会作为右边类型的子类型
  type num = 1 extends number ? 1 : 0;
}
