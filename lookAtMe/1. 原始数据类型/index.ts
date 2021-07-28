/**
 * JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。
 *
 * 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。
 * 
 * 这里介绍最常用的前五种在 TS 中的用法
 */

// 1. boolean
let isDone: boolean = false;

let isDone1: boolean = new Boolean()

// 2. number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN; // 注意 NaN (not a number) 是只能赋给 number 类型的
let infinityNumber: number = Infinity;

// 3. string
let myName: string = 'Tom';
let myAge: number = 22;

// ts 中也支持模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old.`;

// 4. void 空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName(): void {
  alert('My name is Tom');
}

// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let void1: void = undefined;
let void2: void = 1;

// 5. null | undefined

// 1). 可以使用 null 和 undefined 去定义一个原始值的类型
// 2). 与 void 类型的区别是 null 和 undefined 类型的值是所有类型的子类型

 let u: undefined = null;
 let n: null = undefined;
 let u1: undefined = undefined;
 let n1: null = null;
 
 // 任何类型的子类型
 let num: number = undefined;
 let num1: boolean = null
 num = n
 

