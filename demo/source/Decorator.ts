/**
 * Decorator装饰器
 * 1. 类装饰器:ClassDecorator
 * 2. 属性装饰器:PropertyDecorator
 * 3. 参数装饰器:ParameterDecorator
 * 4. 方法装饰器:MethodDecorator PropertyDecorator
 * 5. 装饰器工厂
 * 6. 编辑元数据import 'reflect-metadata'
 * 7. axios
 */
import "reflect-metadata";
import axios from "axios";

// 类装饰器
// 使用时,创建一个装饰器函数,例如下方的Base
// 然后在需要进行装饰的类的正上方(比如下面的Http)使用@函数名来引用,也可以直接:函数名(需要修饰的类)来使用
// 使用之后会自动传入一个参数target,就是上一步装饰的类的构造函数
// 可以调用其prototype,给它上面加方法或者是属性
// 因为可以自动传入其构造函数,可以不破坏其原有的代码结构.
// 所以特别适合用来处理某些具有高度复杂性的类的新增方法或者属性的定义.
// 比如某些类里面的方法或者是属性有几百行,就可以使用装饰器来一次性传入其构造函数,直接调用prototype,往里面写方法和属性就可以了
const Base: ClassDecorator = (target) => {
  target.prototype.non_hana = "non_hana"; // 给类的原型上面加属性
  target.prototype.func = () => { // 给类的原型上面加方法
    console.log("non_hana");
  };
};
@Base
class Http {}
const http = new Http() as any;
http.func();

// 装饰器工厂
// 其实就是函数柯里化的应用
// 当我们在调用装饰器函数的时候,因为其会自动传入需要修饰的类的构造函数
// 因此,在需要自定义装饰器函数的传入参数的时候,我们可以内部封装一个用来接收自动传入参数的函数,然后把这个函数return出去
// 在装饰器函数的参数上面就可以自定义我们需要的参数.
// 下方就是这个例子.
const Factory = (name: string) => { // name是自定义的传入参数
  const innerFunc: ClassDecorator = (target: any) => { // 这边的target是自动传入的类的构造函数
    target.prototype.non_hana = name;
    target.prototype.func = () => {
      console.log(name);
    };
  };
  return innerFunc;
};
// 自定义传入参数为一个字符串
@Factory("non_hana")
class People {}

// 方法装饰器+参数装饰器
// 封装一个Get装饰器函数，用来修饰类中的方法.
// 只需要传入url，自动将获取到的数据织入下方的函数体内部
const Get = (url: string) => {
  const innerFunc: MethodDecorator = (
    target,
    _,
    descriptor: PropertyDescriptor
  ) => {
    const key = Reflect.getMetadata("key", target);
    axios.get(url).then((res) => {
      console.log(target, key, descriptor);
      descriptor.value(key ? res.data[key] : res.data);
    });
  };
  return innerFunc;
};
// 封装一个Result装饰器函数,用来修饰类中方法的参数.
// 在这里就是实现了处理data的效果，将result存到这个对象的元数据里面，然后在Get函数里面调用。
const Result = () => {
  const innerFunc: ParameterDecorator = (target, key, index) => {
    console.log(target, key, index);
    Reflect.defineMetadata("key", "result", target);
  };
  return innerFunc;
};

@Factory("non_hana")
class Methods {
  @Get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=1")
  getList(@Result() data: any) {
    console.log(data);
  }
  // @Post()
  create() {}
}

// 属性装饰器
// 用来修饰一个类中的某个属性，其中target是这个类的原型对象，key是这个属性的名称
const Name: PropertyDecorator = (target, key) => {
  console.log(target, key);
};

class Property {
  @Name
  name: string;
  constructor() {
    this.name = "non_hana";
  }
}
