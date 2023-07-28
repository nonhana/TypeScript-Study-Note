/**
 * never类型表示不应该存在的某种状态
 */

// 因为不可能某种类型既是string又是number,所以自动推断成了never类型
type neverType = string & number;

// 使用场景:报错函数,错误的函数(死循环函数),类型匹配(switch)的兜底逻辑
function neverFunc1(): never {
  throw new Error("non_hana");
}

function neverFunc2(): never {
  while (true) {}
}

type people = "吃" | "喝" | "睡";
function neverFunc3(value: people) {
  switch (value) {
    case "吃":
      break;
    case "喝":
      break;
    case "睡":
      break;
    default:
      // 兜底逻辑
      const error: never = value;
      console.log(error);
      break;
  }
}

neverFunc2();
