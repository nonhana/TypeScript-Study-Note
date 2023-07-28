/**
 * Class，类
 * 1. Class的基本用法，继承+类型约束->implement
 * 继承相当于给原本的Class多加一些方法去实现，类型约束就是平常对于变量的类型定义
 * 2. Class的修饰符readonly private protected public
 * 3. super原理
 * 4. 静态方法
 * 5. get，set
 */
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Dom = /** @class */ (function () {
  function Dom() {}
  // 通过js创建节点的方法
  Dom.prototype.createElement = function (el) {
    return document.createElement(el);
  };
  // 填充文本的方法
  Dom.prototype.setText = function (el, text) {
    el.textContent = text;
  };
  // 渲染函数，把虚拟dom渲染成一个真实的dom
  Dom.prototype.render = function (data) {
    var _this = this;
    var root = this.createElement(data.tag);
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach(function (item) {
        // 这边用了递归的操作
        // 因为不知道children下方还有没有children，所以直接递归处理多重循环
        var child = _this.render(item);
        root.appendChild(child);
      });
    } else {
      this.setText(root, data.text);
    }
    return root;
  };
  return Dom;
})();
// 类型约束：定义类之后使用implements关键字约束类
// 继承：使用extends关键字继承某一个类，能够在该类中调用被继承的类中的方法
// extends必须写在implements关键字的前面
var Vue = /** @class */ (function (_super) {
  __extends(Vue, _super);
  function Vue(options) {
    var _this = _super.call(this) || this;
    _this.options = options;
    _this.init();
    return _this;
  }
  Vue.prototype.init = function () {
    // 虚拟dom就是通过js去渲染这个真实的dom
    var data = {
      tag: "div",
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
    var app =
      typeof this.options.el === "string"
        ? document.querySelector(this.options.el)
        : this.options.el;
    app.appendChild(this.render(data));
  };
  return Vue;
})(Dom);
new Vue({
  el: "#app",
});
