"use strict";
/**
 * 命名空间：NameSpace
 * 在TS和ECMA当中，如果不使用export和import，
 * 那么定义在单个文件中的变量均被视为是全局的。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = void 0;
// 一般命名空间的定义
// 编译成js,其实就是在外面套了一层函数,然后吧a作为一个属性赋给A.
var A;
(function (A) {
    A.a = 1;
})(A || (A = {}));
// 嵌套命名空间
var B;
(function (B) {
    var C;
    (function (C) {
        C.d = 5;
    })(C = B.C || (B.C = {}));
})(B || (B = {}));
// 抽离命名空间
// 其实也就是将一个命名空间进行导出,然后在其他文件中进行引用.
var D;
(function (D) {
    D.e = 6;
})(D || (exports.D = D = {}));
