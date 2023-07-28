"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 在这个文件中引入在NameSpace1中抽离出去的命名空间
var NameSpace1_1 = require("./NameSpace1");
var A;
(function (A) {
  var B;
  (function (B) {
    B.c = 1;
    B.d = NameSpace1_1.D.e;
  })((B = A.B || (A.B = {})));
})(A || (A = {}));
console.log(A.B.d);
