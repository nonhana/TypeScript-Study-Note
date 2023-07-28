/**
 * 内置对象
 * 众所周知，js由三部分所组成
 * 1. ECMAScript内置对象
 * 2. DOM对象
 * 3. BOM对象
 * 在ts当中，每一种对象都有其对应的类型定义。
 */

namespace BuiltInObject {
  // ECMAScript内置对象的定义
  let num: Number = new Number();
  let date: Date = new Date();
  // 举一个限制日期格式为yyyy-mm-dd的例子
  let reg1: RegExp = new RegExp(
    /^(?:(?:(?:1[6-9]|[2-9]\d)?\d{2})-(?:(?:(?:0?[13578]|1[02])-(?:0?[1-9]|[12]\d|3[01]))|(?:(?:0?[469]|11)-(?:0?[1-9]|[12]\d|30))|(?:0?2-(?:0?[1-9]|1\d|2[0-8]))))|(?:(?:1[6-9]|[2-9]\d)?\d{2})(?:(?:(?:0?[13578]|1[02])(?:0?[1-9]|[12]\d|3[01]))|(?:(?:0?[469]|11)(?:0?[1-9]|[12]\d|30))|(?:0?2(?:0?[1-9]|1\d|2[0-8]))))$/
  );
  let error: Error = new Error();
  let map: Map<string, number> = new Map();
  let xhr: XMLHttpRequest = new XMLHttpRequest();

  // DOM对象的定义
  let div: HTMLDivElement = document.querySelector("div") as HTMLDivElement;
  // nodeListOf是一个类数组对象，可以使用forEach进行遍历，并不是一个数组
  let nodeList: NodeListOf<HTMLDivElement | HTMLElement> =
    document.querySelectorAll("div footer");

  // BOM对象的定义
  let local: Storage = localStorage;
  let loc: Location = location;
  let promise: Promise<number> = new Promise((res) => res(1));
  let cookie: string = document.cookie;
}
