## TypeScript学习笔记+示例源码

### 1. 前言

本质是在B站上跟着小满zs一步步走过来的TS学习笔记，其中每一个专栏都跟着视频一点点的进行代码的书写，并且根据自己的理解在每个值得学习的点上加上注释，确保自己复习、学习的时候能够看得懂。

该学习笔记总共分为7个文件夹目录，其中：

1. **`demo`**：该文件夹主要存放我在学习过程中的所有代码以及笔记，都是针对TS中的常见语法及其用法示例的。主要的学习源代码存放于source文件夹当中，每个文件的标题就对应着该文件的知识点。里面的`index.html`文件主要是用来测试经过编译后的`TypeScript`能不能在网页里面跑通；`tsconfig.json`文件内部所有的配置项注释我已经全部转为中文，方便大家学习参考。
2. **`html-demo`**：存放跟着小满zs写的一个利用`canvas`实现代码雨的示例，主要是锻炼自己使用`TypeScript`手写`HTML`脚本的能力。
3. **`plugin-demo`**：存放使用`TypeScript`编写的一个插件，使用`rollup`打包工具进行打包，详情见`src`文件夹。
4. **`publishingSubscriptionModel`**：存放一个使用`TypeScript`手写的一个模拟`Vue`的发布订阅模式的源代码。
5. **`rollupTS`**、**`webpackTS`**、**`esbuild+swcTS`**：三者分别是使用`rollup`、`webpack`、`esbuild+swc`对`TypeScript`进行打包的项目，参考配置供参考，主要是学习模拟打包的一个过程。

### 2. 后记

当然学习笔记肯定不止这么点，这么点只是`TypeScript`语法的皮毛。真正想要熟练掌握`TypeScript`还是得自己亲身的做点项目。我这边比较建议自己使用`TypeScript`手写一个比较简单的后端，比如`Express`、`Koa`、`Nest.js`等等，虽然`Vue`、`React`等前端框架已经可以使用`TypeScript`实现脚本，但是真正想提升自己的语言工程化能力还是得看后端。接下来我也打算将我之前写的很多`JavaScript`后端项目全部改写成`TypeScript`。

### 3. 结语

希望这个项目能够给大家在学习`TypeScript`的时候提供些许的帮助！！！！