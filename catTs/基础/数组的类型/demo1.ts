/**
 * 在 TS 中，数组类型有多种定义方式，比较灵活
 */

// 1. 类型 + 方括号 -> 此种方法定义数组类型，数组中每个元素的类型都必须是定义的类型，这种约束也是在定义时就生效了。
let numArr: number[] = [1, 2, 3, 4];
let numArr1: string[] = ['1', 2, '3', '4']; // 报错，因为这类型是字符串数组，当中元素不能为其他类型。
numArr1.push(3); // 约束在定义时就生效。

// 2. 数组泛型的方式定义 -> Array<类型> -> 这里的类型也限制了数组元素的类型
let numArr3: Array<number> = [1, 2, 3]

/**
 * 类数组的类型定义 -> 内置了 IArguments 类型
 */

 // 我们知道，类数组其实是一个对象，类数组对象。对象的类型定义应该用接口。
 function sum() {
   let args: any[] = arguments; // 报错，说是类数组对象不能用数组类型去定义，因为缺少了数组特有的 pop、push 等26种方法。
 }

 // 我们应该用接口去定义
 interface IArgument { // -> 实际上，内置的 IArguments 接口也是这样定义的。
   [index: number]: any;
   length: number;
   callee: Function;
 }
 function sum1 () {
   let args: IArgument = arguments;
   let args1: IArguments = arguments;
 }

