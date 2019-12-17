/**
 * 1. 可以使用 null 和 undefined 去定义一个原始值的类型
 * 2. 与 void 类型的区别是 null 和 undefined 类型的值是所有类型的子类型
 */

let u: undefined = null;
let n: null = undefined;
let u1: undefined = undefined;
let n1: null = null;

// 任何类型的子类型
let num: number = undefined;
let num1: number = n
num = n

// void 类型的值就只能是 undefined / null 了
let v: void;
// num1 = v 报错：不能将类型“void”分配给类型“number”