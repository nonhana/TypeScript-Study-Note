/**
 * 三斜线指令
 * 三斜线指令是包含单个XML标签的单行注释,注释的内容会作为编译器的指令来使用
 * 换句话说也就是import引入
 */

// 导入其他的模块文件
///<reference path="./NameSpace1.ts" />
///<reference path="./NameSpace2.ts" />
namespace A {
  export const o = 1;
}

// 导入声明文件
// 安装了某些第三方库之后,会顺带安装它们的声明文件(index.d.ts),使用这个语法可以比较便捷的进行引入
///<reference types="node" />
