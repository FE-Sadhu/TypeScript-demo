## 什么是 TypeScript ？

> # **Typed JavaScript at Any Scale.**
>
> By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.
>
> Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.

强调了 TypeScript 的两个最重要的特性——**类型系统**、**适用于任何规模**。

### 类型系统

首先，我们知道，JavaScript 是一门非常灵活的编程语言：

- 它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。

- 由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。

- 基于原型 prototype 的面向对象编程，使得原型上的属性或方法可以在运行时被修改。

- 函数是 JavaScript 中的一等公民，可以赋值给变量，也可以当作参数或返回值。
  ==

  这种灵活性就像一把双刃剑，一方面使得 JavaScript 蓬勃发展，从 2013 年开始就一直蝉联最普遍使用的编程语言排行榜冠军；另一方面也使得它的代码质量参差不齐，维护成本高，运行时错误多。

而 TypeScript 的类型系统，在很大程度上弥补了 JavaScript 的缺点。

#### TypeScript 是静态类型

类型系统按照「类型检查的时机」来分类，可以分为动态类型和静态类型。

动态类型是指在**运行时**才会进行类型检查，这种语言的类型错误往往会导致**运行时错误**。

JavaScript 是一门[解释型语言](https://web.stanford.edu/class/cs98si/slides/overview.html)，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：

```js
let foo = 1;
foo.split(' ');
// Uncaught TypeError: foo.split is not a function
// 运行时会报错（foo.split 不是一个函数），造成线上 bug
```

静态类型是指**编译阶段**就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。
TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查，所以 TypeScript 是静态类型，这段 TypeScript 代码在编译阶段就会报错了

```ts
let foo = 1;
foo.split(' ');
// Property 'split' does not exist on type 'number'.
// 编译时会报错（数字没有 split 方法），无法通过编译
```

可能有的小朋友有疑问，为啥这两段代码一模一样，在 ts 中能检查出错误呢？ ---  Type Inference

#### TypeScript 是弱类型

类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型。

TypeScript 不会抹杀任何 js 的运行时特性。

以下这段代码不管是在 JavaScript 中还是在 TypeScript 中都是可以正常运行的，运行时数字 1 会被隐式类型转换为字符串 '1'，加号 + 被识别为字符串拼接，所以打印出结果是字符串 '11'。

```js
console.log(1 + '1');
// 打印出字符串 '11'
```

TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以它们都是弱类型。

但是使用 TS 可以在**一定程度**上“规避”弱类型，比如你显示地操作 `==`, `===` 比较时：

```ts
const a = '';

if (a == false) { // Error: This condition will always return 'false' since the types 'string' and 'boolean' have no overlap.
  // xxx
}
```

作为对比，Python 是强类型，以下代码会在运行时报错：

```python
print(1 + '1')
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

若要修复该错误，需要进行强制类型转换：

```python
print(str(1) + '1')
# 打印出字符串 '11'
```

综上： 这样的类型系统体现了 TypeScript 的[核心设计理念](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals)：在完整保留 JavaScript 运行时行为的基础上，通过引入静态类型系统来提高代码的可维护性，减少可能出现的 bug。   俗称： TypeScript is a superset of JavaScript.


### 适用于任何规模

TS 是渐进式的。

啥玩意儿？

TypeScript 还可以和 JavaScript 共存。

意味着如果你有一个使用 JavaScript 开发的旧项目，又想使用 TypeScript 的特性，那么你不需要急着把整个项目都迁移到 TypeScript，你可以使用 TypeScript 编写新文件，然后在后续更迭中逐步迁移旧文件。

如果一些 JavaScript 文件的迁移成本太高，TypeScript 也提供了一个方案，可以让你在不修改 JavaScript 文件的前提下，编写一个类型声明文件（xx.d.ts），实现旧项目的渐进式迁移。

### 与标准同步

还有个值得提一嘴的，也是 TS 能持续繁荣的原因之一嗷，就是在设计 TS 这门语言之初，微软团队就立下了 [flag](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals) 坚持与 ECMAScript 标准同步发展，给 JS 带来了正向反馈。

ECMAScript 是 JavaScript 核心语法的标准，自 2015 年起，每年都会发布一个新版本，包含一些新的语法。

一个新的语法从提案到变成正式标准，需要经历以下几个阶段：

Stage 0：展示阶段，仅仅是提出了讨论、想法，尚未正式提案。
Stage 1：征求意见阶段，提供抽象的 API 描述，讨论可行性，关键算法等。
Stage 2：草案阶段，使用正式的规范语言精确描述其语法和语义。
Stage 3：候选人阶段，语法的设计工作已完成，需要浏览器、Node.js 等环境支持，搜集用户的反馈。
Stage 4：定案阶段，已准备好将其添加到正式的 ECMAScript 标准中。

一个语法进入到 Stage 3 阶段后，TypeScript 就会实现它。一方面，让我们可以尽早的使用到最新的语法，帮助它进入到下一个阶段；另一方面，处于 Stage 3 阶段的语法已经比较稳定了，基本不会有语法的变更，这使得我们能够放心的使用它。

除了实现 ECMAScript 标准之外，TypeScript 团队也推进了诸多语法提案，比如[可选链操作符（?.）](https://github.com/tc39/proposal-optional-chaining)、[空值合并操作符（??）](https://github.com/tc39/proposal-nullish-coalescing)、[Throw 表达式](https://github.com/tc39/proposal-throw-expressions)、[正则匹配索引](https://github.com/tc39/proposal-regexp-match-indices)等。

### TypeScript 的缺点

社区有争议的点大概就这三点：

1. 类型标注麻烦，需要额外写代码，降低开发效率。
2. 需要编译，类型检查会增加编译时长。
3. `eval` 和 `new Function()` 这种骚操作类型系统管不到。

#### 针对 1:

事实上，由于有类型推论（Type Inference），大部分类型都不需要手动声明了。相反，TypeScript 增强了编辑器（IDE）的功能，包括**代码补全**、**接口提示**、**跳转到定义**、**代码重构**等，这在很大程度上**提高了开发效率**。而且 TypeScript 有近百个编译选项（tsconfig.json），如果你认为类型检查过于严格，那么可以通过修改编译选项来降低类型检查的标准。

事实上，就算你从来没学习过 TypeScript，你也可能已经在不知不觉中使用到了 TypeScript——在 VSCode 编辑器中编写 JavaScript 时，代码补全和接口提示等功能就是通过 [TypeScript Language Service](https://code.visualstudio.com/docs/languages/typescript) 实现的:

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc0ad17d15e345dba55ca776efc51b68~tplv-k3u1fbpfcp-watermark.image)

一些第三方库原生支持了 TypeScript，在使用时就能获得代码补全了，比如 Vue 3.0：

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45f8746a77f34b08ad38f314d4b26be5~tplv-k3u1fbpfcp-watermark.image)

有一些第三方库原生不支持 TypeScript，但是可以通过安装社区维护的[类型声明库](https://github.com/DefinitelyTyped/DefinitelyTyped)（比如通过运行 npm install --save-dev @types/react 来安装 React 的类型声明库）来获得代码补全能力——不管是在 JavaScript 项目中还是在 TypeScript 中项目中都是支持的：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d66ca86134740b0b097fc73dc8ec7d5~tplv-k3u1fbpfcp-watermark.image)

从另一方面来讲，个人认为**类型系统实际上是最好的文档**，大部分的函数看看类型的定义就可以知道如何使用了，实际上也是提升了开发效率和可维护性。

#### 针对 2：

TS 确实内置了个编译器(tsc)，(准确说是带个 checker 的 transpiler)， 如果采用仅用 tsc 直接把 ts/tsx 转译为 js 的方案，会导致无法使用 Babel 的生态，但 Babel 已经内置在很多项目中了，不使用 babel-loader 之类的工具在转译一次的话可能会出现垫片(shim)无法按需加载、antd 无法按需引入等问题 。 如果又要让 tsc 去做转译工作又要用 babel 的生态，在之前大部分是采用这种方案，以 webpack loader 为例：用 ts-loader 把 ts/tsx 转成 js/jsx，然后再用 babel-loader 去调用 babel 系列插件，编译成最终的 js。

但是这样会有两次转译过程哦，编译时间不减反增，这咋行？

迫于开发者的强烈需求，微软终于在 2018 年 8 月 27 日宣布了 TS 与 Babel 的[婚姻](https://devblogs.microsoft.com/typescript/typescript-and-babel-7/)~~~

Babel 7 之后，内置转译 TS。

不过吧...  Babel 的编译操作很骚，直接把 TS 的类型标注全给抹掉！  抹掉类型的 TS 就是 JS ！ 这句话没毛病，并且直接不检查类型了，那肯定快呀...

那类型检查的行为交给谁呢？   ---   IDE ！

没错，让 IDE 在开发者的编码阶段就持续做检查，一旦发现开发者有错误的类型定义与使用，立马报红。 （VSCode 就是 TS 写的，JetBrains 公司的尿性老早内置了，Vim、Atom、Sublime Text 玩家也有对应的 TS 插件）

`Momoko`(公司项目) 采用的就是这种方案。

当然你不相信 IDE 的话，完全可以加个 `npm scripts` 在打包前用 tsc 检查下类型。  也有打包过程中开辟个单独的线程专门来做类型检查这任务的方案，个人认为没必要，不赘述~

所以，现如今，采用恰当的方案，TS 的编译也可以很快。

#### 针对 3：

TS 还确实不支持在字符串内定义类型，不过在业务项目中也用不到这两个方法。

#### 额外不上 TS 的方案

见仁见智。

### 总结一波

什么是 TypeScript？

- TypeScript 是添加了类型系统的 JavaScript，适用于任何规模的项目。
- TypeScript 是一门静态类型、弱类型的语言。
- TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性。
- TypeScript 可以编译为 JavaScript，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中。
- TypeScript 拥有很多编译选项，类型检查的严格程度由你决定。
- TypeScript 可以和 JavaScript 共存，这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript。
- TypeScript 增强了编辑器（IDE）的功能，提供了代码补全、接口提示、跳转到定义、代码重构等能力。
- TypeScript 拥有活跃的社区，大多数常用的第三方库都提供了类型声明。
- TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）。






**附：Flow 与 TS 的对比与八卦**

1. [Vue 2.0 为什么选用 Flow 进行静态代码检查而不是直接使用 TypeScript？](https://www.zhihu.com/question/46397274)
2. [为什么 React 源码不用 TypeScript 来写？](https://www.zhihu.com/question/378470381)

**附：TypeScript 的发展历史**

- 2012-10：微软发布了 TypeScript 第一个版本（0.8），此前已经在微软内部开发了两年。
- 2014-04：TypeScript 发布了 1.0 版本。
- 2014-10：Angular 发布了 2.0 版本，它是一个基于 TypeScript 开发的前端框架。
- 2015-01：ts-loader 发布，webpack 可以编译 TypeScript 文件了。
- 2015-04：微软发布了 Visual Studio Code，它内置了对 TypeScript 语言的支持，它自身也是用 TypeScript 开发的。
- 2016-05：`@types/react` 发布，TypeScript 可以开发 React 应用了。
- 2016-05：`@types/node` 发布，TypeScript 可以开发 Node.js 应用了。
- 2016-09：TypeScript 发布了 2.0 版本。
- 2018-06：TypeScript 发布了 3.0 版本。
- 2019-02：TypeScript 宣布由官方团队来维护 typescript-eslint，以支持在 TypeScript 文件中运行 ESLint 检查。
- 2020-05：Deno 发布了 1.0 版本，它是一个 JavaScript 和 TypeScript 运行时。
- 2020-08：TypeScript 发布了 4.0 版本。
- 2020-09：Vue 发布了 3.0 版本，官方支持 TypeScript。



## TS 知识点
Show the code. 见 repo ./lookAtMe

## 以一个例子来检验知识点的学习
见 repo ./lookAtMe/exp.ts

