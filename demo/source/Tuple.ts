/**
 * 元组类型
 * 元组其实就是数组的一个变种，是固定数量的不同类型的元素的组合。
 */

// 定义元组的方式就是写一个数组，里面包含这个数组里面所有允许出现的变量类型
// 可以使用readonly进行修饰，使得数组不可以通过index和.push方法等内置的属性来更改值
// 可以给具体的某个属性起名字，从而控制这个属性是否为可选的属性
let arr: readonly [x: number, y?: boolean] = [1, false];

// 实际应用场景：
let excel: [string, string, number][] = [["non_hana", "男", 18]];
