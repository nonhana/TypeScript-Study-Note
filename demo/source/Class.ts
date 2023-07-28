/**
 * Class，类
 * 1. Class的基本用法，继承+类型约束->implement
 * 继承相当于给原本的Class多加一些方法去实现，类型约束就是平常对于变量的类型定义
 * 2. Class的修饰符:readonly private protected public
 * readonly只能被用来索引签名或者是一个属性上面，表示只读，不可更改
 * private可以增加到属性或者是方法前面，作用是只能在内部使用，自己调自己。也就是不可以通过继承来被其他的类调用
 * protected给子类和内部去使用，创建新对象调用方法是无效的
 * 所有的方法默认全是public。给内部、子类、外部都可以用。
 * 3. super原理
 * 4. 静态方法
 * 5. get，set
 */

namespace VirtualDom {
  // 虚拟DOM简单版
  interface Options {
    el: string | HTMLElement;
  }
  interface VueClass {
    options: Options; // 配置内容
    init(): void; // 初始化
  }
  interface VNode {
    tag: string;
    text: string;
    children?: VNode[];
  }
  class Dom {
    constructor(name: string) {}
    // 通过js创建节点的方法
    createElement(el: string) {
      return document.createElement(el);
    }
    // 填充文本的方法
    setText(el: HTMLElement, text: string | null) {
      el.textContent = text;
    }
    // 渲染函数，把虚拟dom渲染成一个真实的dom
    protected render(data: VNode) {
      let root = this.createElement(data.tag);
      if (data.children && Array.isArray(data.children)) {
        data.children.forEach((item) => {
          // 这边用了递归的操作
          // 因为不知道children下方还有没有children，所以直接递归处理多重循环
          let child = this.render(item);
          root.appendChild(child);
        });
      } else {
        this.setText(root, data.text);
      }
      return root;
    }
  }

  // 类型约束：定义类之后使用implements关键字约束类
  // 继承：使用extends关键字继承某一个类，能够在该类中调用被继承的类中的方法
  // extends必须写在implements关键字的前面
  class Vue extends Dom implements VueClass {
    options: Options;
    constructor(options: Options) {
      // 在constructor里面初始化一下父类
      // 实际上就是调用了父类的prototype.constructor.call，可以给父类的constructor传参
      super("non_hana");
      this.options = options;
      this.init();
    }
    // static创建静态方法。在static里面的this只能够调用被static修饰的方法/属性
    static version() {
      return "1.0.0";
    }
    init(): void {
      // 虚拟dom就是通过js去渲染这个真实的dom
      let data: VNode = {
        tag: "div",
        text: "我是父节点",
        children: [
          {
            tag: "section",
            text: "我是子节点1",
          },
          {
            tag: "section",
            text: "我是子节点2",
          },
        ],
      };
      let app =
        typeof this.options.el === "string"
          ? document.querySelector(this.options.el)
          : this.options.el;
      app.appendChild(this.render(data));
    }
  }

  new Vue({
    el: "#app",
  });

  // 静态方法
  // 不new一个实例，直接使用这个Class本身去调用的方法，就是静态方法
  Vue.version();
}

// get和set都是关键字。
// get表示在读这个类里面的数据的时候，做某些操作来变更返回的值，也就是做数据劫持；
// set表示在设置属性的时候，对传进来的值做一些初始化的操作之后再放入对象中。
// 创建一个名为 Ref 的类
namespace Ref {
  class Ref {
    private _value: any; // 私有属性，用来存储类的值
    constructor(value: any) {
      this._value = value; // 在类的构造函数中初始化私有属性值
    }

    // 使用 get 关键字定义一个名为 value 的属性访问器，用于读取类的值
    get value() {
      // 在读取类的值时，对返回的值进行数据劫持和处理
      return `value=${this._value}`; // 返回处理后的值
    }

    // 使用 set 关键字定义一个名为 value 的属性访问器，用于设置类的值
    set value(newV) {
      // 在设置类的值时，对传入的新值进行数据劫持和处理
      this._value = newV + "non_hana"; // 对新值进行处理，并赋值给私有属性
    }
  }

  // 创建 Ref 类的实例 ref，初始值为 "哈哈哈"
  const ref = new Ref("哈哈哈");
  ref.value = "non_hana,";
  // 使用属性访问器获取 ref 的值
  console.log(ref.value); // 输出：value=哈哈哈non_hana
}
