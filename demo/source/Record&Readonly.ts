/**
 * Record & Readonly
 */

namespace RecordAndReadonly {
  // Readonly就是把所有的属性变为只读，和Partial差不多
  type R<T> = {
    readonly [P in keyof T]: T[P];
  };
  type Person = {
    name: string;
    age: number;
  };
  type man = R<Person>;

  // Record
  // K extends keyof any的作用是让K的类型变为string | number | symbol
  // Record的作用是定义一个对象的类型，这个对象的键名的类型为K，键值的类型为T
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
  type K = "A" | "B" | "C";
  type B = Record<K, Person>;
  let obj: B = {
    A: { name: "A", age: 1 },
    B: { name: "B", age: 2 },
    C: { name: "C", age: 311233 },
  };
}
