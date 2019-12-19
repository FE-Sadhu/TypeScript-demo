/**
 * js 中的很多内置对象(比如 Boolean、Error、Date、RegExp、Event 等)，在 TS 中已经内置定义好了，在 TS 也是内置的。
 * 内置对象可以在 TS 中直接当类型使用。
 */

// ECMA 的内置对象  找更多内置对象可以查看 MDN
 let b: Boolean = new Boolean(1);
 let e: Error = new Error('Error occurred');
 let d: Date = new Date();
 let r: RegExp = /[a-z]/g;

// DOM 和 BOM 的内置对象 -> Document HTMLElement Event NodeList 等
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e: MouseEvent) {

})

// 一些 js 方法在 TS 核心库也定义好了。
Math.pow(10, '2'); // Err: 因为 Math.pow() 两个参数都应该是 number 的，这个内置了。

/**
 * TS 核心库的内置定义中不包含 Node.js 部分
 * 想用 TS 写 Node 的话，需要引入第三方声明文件 -> npm install @types/node --save-dev
 */