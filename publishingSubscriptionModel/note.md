## 发布订阅模式

当涉及到软件设计模式时，发布-订阅模式（Publish-Subscribe Pattern），也称为观察者模式（Observer Pattern），是一种行为型设计模式，用于处理对象之间的一对多依赖关系。在该模式中，一个对象（称为发布者或主题）维护一组依赖于它的对象（称为订阅者或观察者），并在状态发生变化时通知所有的订阅者，使它们能够自动更新。

发布-订阅模式包含以下主要角色：

1. 发布者（Subject）：也称为主题，它是拥有状态和数据的对象，它维护了一组订阅者，并在状态发生变化时通知订阅者。
2. 订阅者（Observer）：也称为观察者，它们是依赖于发布者状态的对象，当发布者的状态发生变化时，订阅者会接收到通知并执行相应的操作。

通过发布-订阅模式，对象之间的耦合性得以降低，使得系统更加灵活，新增和移除订阅者都能方便地进行。这种模式广泛应用于前端开发中，用于解耦事件处理、组件通信等场景。

在原生`JavaScript`中，发布订阅模式就一直存在，比如`addEventListener`和`removeEventListener`，能够帮助我们去收集一些事件，然后能够统一的进行处理。

再比如在Vue2当中，全局事件总线（`EventBus`）也是发布订阅模式的一种比较重要的体现。我们在使用的时候，先是通过`$emit`来派发一个事件，并且事件名称后面可以附加上一些参数来进行派发。相应的，监听派发事件可以通过`$on`来进行监听，通过其回调函数来接收这些参数。

典型的发布-订阅模式使用示例如下：

```javascript
// 发布者（主题）
class Publisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter((sub) => sub !== observer);
  }

  notify(data) {
    this.subscribers.forEach((sub) => sub.update(data));
  }
}

// 订阅者（观察者）
class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} received update: ${data}`);
  }
}

// 使用示例
const publisher = new Publisher();

const subscriber1 = new Subscriber('Subscriber 1');
const subscriber2 = new Subscriber('Subscriber 2');

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

publisher.notify('Hello, subscribers!');
// Output:
// Subscriber 1 received update: Hello, subscribers!
// Subscriber 2 received update: Hello, subscribers!

publisher.unsubscribe(subscriber2);

publisher.notify('Another message!');
// Output:
// Subscriber 1 received update: Another message!
```

在上面的示例中，我们创建了一个简单的发布者（主题）和两个订阅者（观察者）。主题维护一个订阅者列表，并在通知方法 `notify` 被调用时，向所有订阅者发送消息。订阅者通过 `update` 方法接收发布者的消息并作出相应的响应。