/**
 * 泛型：Generic Type
 * 泛型，也可以叫做动态类型，也就是可以变化的类型。
 * 应用泛型，能够使得函数/对象的泛用性高。
 */

namespace GenericType {
  // 不使用泛型的写法：必须定义死参数和返回的类型。
  // 如果需要传入不同类型的参数时，必须自己手动重新写一个一模一样的函数。
  // 就只把参数类型变了一下。
  function non_hanaNumber(a: number, b: number): Array<number> {
    return [a, b];
  }
  function non_hanaString(a: string, b: string): Array<string> {
    return [a, b];
  }

  // 使用泛型的写法：在参数括号前面使用<>写进去一个类型占位符(一般用T)，
  // 之后再参数和返回的类型里面都用这个T就可以了。
  // 之后调用这个函数的时候，会根据自己传入参数的类型进行自行推断。
  function non_hana<T>(a: T, b: T): Array<T> {
    return [a, b];
  }
  non_hana(1, 2);
  non_hana("str1", "str2");
  non_hana(false, true);

  // 使用泛型的type
  // 使用这个type的时候，必须传入一个泛型参数<>作为T的替代。
  // 在这里也就是除了string和number，另外一个类型自己定义。
  type A<T> = string | number | T;
  let a: A<boolean> = 1;

  // 使用泛型的interface
  interface Data<T> {
    msg: T;
  }
  let data: Data<string> = {
    msg: "non_hana",
  };

  // 一次性应用多个泛型
  // 泛型也可以定义默认值
  function add<T = number, K = string>(a: T, b: K): Array<T | K> {
    return [a, b];
  }
  add(1, false);

  // 泛型的实际应用：向后端发接口请求的时候不清楚传过来的参数的类型，可以先用泛型定义好
  const axios = {
    get<T>(url: string): Promise<T> {
      return new Promise((resolve, reject) => {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          }
        };
        xhr.send(null);
      });
    },
  };
  // 通过PostMan或者ApiFox里面定义好的返回类型可以自己写好返回的interface
  // 然后传到接口请求函数的泛型里面。
  interface UserData {
    result_code: number;
    data: {
      user_id: number;
      user_name: string;
      user_age: number;
    };
  }
  axios.get<UserData>("./data.json").then((res) => {
    console.log(res.data);
  });

  // 由于泛型本身可以指代所有的其他任意类型，所以有时候会造成结果的错误。
  // 所以可以使用泛型约束来控制类型的范围。
  // 在类型后面跟一个extends，再跟一个约束的类型就可以了
  function add1<T extends number>(a: T, b: T) {
    return a + b;
  }
  // 定义一个接口，里面包含length属性。
  // 使用T extends Len，表示这个T为所有包含length这个属性的类型。
  // 比如Array，string等。
  interface Len {
    length: number;
  }
  function lengthFn<T extends Len>(a: T): number {
    return a.length;
  }
  // 在对象中使用泛型约束：keyof
  // keyof关键字可以把一个对象中所有的键名字符串遍历出来，作为联合类型拼到一块
  // 从而让别的泛型继承它，就可以实现将这个泛型的类型约束为这个对象中的key中的一个(字符串)。
  let obj123 = {
    name: "non_hana",
    sex: "男",
  };
  function typeFn<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  typeFn(obj123, "name");

  // 有关于泛型+keyof的一个高级用法：遍历对象的键并做相应处理
  interface Data123 {
    name: string;
    age: number;
    sex: string;
  }
  // 遍历传进来的对象或者接口的所有键名，把他们全都变成可选的
  type Options<T extends object> = {
    // 因为传进来的是一个接口，因此T[key]取到的就是这个key的类型。
    readonly [Key in keyof T]?: T[Key];
  };
  type Data123_ = Options<Data123>;
}
