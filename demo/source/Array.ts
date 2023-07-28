/**
 * Array
 */

namespace LearningArray {
  // 定义数组普通类型
  let arr1: number[] = [1, 2, 3, 4, 5];
  let arr2: Array<number> = [1, 2, 3, 4, 5];

  // 定义对象数组可以使用interface
  interface X {
    name: string;
  }
  let arr3: X[] = [{ name: "non_hana1" }, { name: "non_hana2" }];
  
  // 二维数组
  let arr4: number[][] = [[1], [2], [3]];
  let arr5: Array<Array<number>> = [[1], [2], [3]];

  function func1(...args: any[]) {
    // IArguments本质上是一个伪数组
    let a: IArguments = arguments;
    console.log(args, a);
  }
  func1(1, 2, 3, 4, 5);
}
