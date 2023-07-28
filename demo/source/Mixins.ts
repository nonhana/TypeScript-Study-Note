/**
 * Mixins混入
 * 分为两种:对象混入,类的混入
 */

// 对象混入
interface Name {
  name: string;
}
interface Age {
  age: number;
}
interface Sex {
  sex: string;
}

let aaa: Name = { name: "non_hana" };
let bbb: Age = { age: 18 };
let ccc: Sex = { sex: "男" };

let objobj = Object.assign(aaa, bbb, ccc);

// 类的混入
// 主要是将类的方法挂载到对象上面,挂载到prototype
class AA {
  type: boolean | undefined;
  changeType() {
    this.type = !this.type;
  }
}
class BB {
  name: string | undefined;
  getName(): string | undefined {
    return this.name;
  }
}

class CC implements AA, BB {
  type: boolean | undefined = false;
  name: string | undefined = "non_hana";
  changeType(): void {}
  getName!: () => string;
}
// 定义混入函数,把AA和BB中的方法挂载到CC上面
function mixins(curCls: any, itemCls: any[]) {
  itemCls.forEach((item) => {
    Object.getOwnPropertyNames(item.prototype).forEach((name) => {
      curCls.prototype[name] = item.prototype[name];
    });
  });
}

mixins(CC, [AA, BB]);
let cccc = new CC();
console.log(cccc.type);
cccc.changeType();
console.log(cccc.type);
