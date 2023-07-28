/**
 * 类型断言 | 交叉类型 | 联合类型
 */

// 联合类型，可以处理不同类型时候的场景。
let phone: number | string = 13362796687;
let fn = function (type: number | boolean): boolean {
  return !!type; // 使用感叹号强转类型，可以将某个值直接转成布尔类型。
};

// 交叉类型，使用&将某两个interface或者两个type合起来。
interface People {
  name: string;
  age: number;
}
interface Man {
  sex: number;
}
const non_hana = (man: People & Man) => {
  console.log(man);
};

// 类型断言，主要是应用在联合类型的时候，
// 当确保传过来的值是该联合类型中的某一种，就可以断言
let fn1 = function (num: number | string): void {
  console.log((num as string).length);
  console.log((<string>num).length);
};
