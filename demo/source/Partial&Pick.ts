/**
 * Partial & Pick
 *
 */

namespace PartialAndPick {
  type Person = {
    name: string;
    age: number;
    text: string;
  };

  // Partial的源码↓
  // [P in keyof T]?的作用是遍历T的所有属性，然后将其变为可选
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  type p = Partial<Person>;

  // Pick的作用是从T中挑选出K的属性
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  
  type q = Pick<Person, "name" | "age">;
}
