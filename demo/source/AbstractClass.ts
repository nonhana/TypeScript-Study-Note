/**
 * abstract class 抽象类、基类
 * abstract所定义的类是抽象类
 * abstract所定义的方法都只能进行描述，而不能进行一个具体的实现
 * 需要有类来专门去继承这些抽象类，然后依次去实现它们的方法，本身无法被实例化
 */

namespace AbstractClass {
  // abstract关键字定义抽象类
  abstract class Vue {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    // 没有被abstract修饰的方法，可以进行实现
    getName(): string {
      return this.name;
    }
    // 使用了abstract修饰的方法，只能进行描述，而不能进行具体的实现
    abstract init(name: string): void;
  }

  // 使用extends关键字继承抽象类
  // 使用implements关键字约束抽象类(后面往往会跟着接口)
  class React extends Vue {
    constructor() {
      // 在派生类的构造函数中必须调用super()
      super("non_hana");
    }
    // 当某个类继承自抽象类时，必须在这个类中实现所有抽象类中定义的抽象方法
    init(name: string): void {
      console.log(name);
    }
    setName(name: string): void {
      // 这个this.name是因为在Vue当中已经定义过一遍name了
      // 在派生类当中就不需要进行二次定义
      this.name = name;
    }
  }

  const react = new React();
  react.setName("non_hana");
  console.log(react.getName());
}
