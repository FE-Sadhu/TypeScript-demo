let myName: string = 'Tom';
let myAge: number = 22;

// ts 中也支持模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old.`;

/**
 * 模板字符串编译结果
 */

// var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old.";
