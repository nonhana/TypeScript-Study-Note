/**
 * Set & Map & WeakSet & WeakMap
 *
 */

namespace SetAndMap {
  // Set有天然去重的功能，引用类型除外
  let set: Set<number> = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6]);
  set.add(7);
  set.has(7);
  set.clear();

  // Map的key可以是引用类型
  let obj = { name: "non_hana", age: 18 };
  let map: Map<object, any> = new Map();
  map.set(obj, "non_hana");
  map.get(obj);
  map.delete(obj);
  map.clear();
  map.has(obj);
  map.forEach((item) => {});
  map.entries();
  map.keys();
  map.values();
  for (let [key, value] of map) {
  }

  // Weakmap 弱项 弱引用 不会被计入垃圾回收策略
  // weakmap和map的区别：weakmap的key只能是引用类型
  // weakmap的key是弱引用，不会创建一个新的引用类型
  // 所以当原来的key被销毁时，weakmap也会被销毁
  let person: object | null = { name: "non_hana", age: 18 }; // 第一次引用
  let otherPerson = person; // 第二次引用
  let weakmap: WeakMap<object, any> = new WeakMap();
  weakmap.set(person, "non_hana");

  // 把person销毁
  person = null;
  console.log(weakmap.get(person)); // undefined

  // weakset和weakmap比较类似，也是弱引用
  let weakset: WeakSet<object> = new WeakSet([]);
}
