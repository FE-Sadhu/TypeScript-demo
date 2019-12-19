/** 
 * 1. 函数声明方式的类型定义
 * 
 * 注意 -> 对于类型声明的参数。少于或多于 TS 规定的约束都不行。
 */

 function hello (name: string, age: number): string {
    return name + age;
 }

 hello('sadhu', 21, 3); // 多了
 hello('sadhu'); // 少了

/**
 * 2. 函数表达式的类型定义
 */

 let hello1: (name: string, age: number) => string = function (name: string, age: number): string {
  return name + age;
 }
 // 注意区分 ES6 的 '=>' 和 TS 的 '=>', TS 的 '=>' 是指函数类型声明，其左边是定义输入类型、右边定义输出类型。
//  hello1 === hello2
 let hello2: (name: string, age: number) => string = function(name, age) {
   return name + age;
 }

 /**
  * 3. 用接口定义函数的形状(类型)。
  */

interface HelloFunc {
  (name: string, age: number): string;
}

let hello3: HelloFunc = function (name, age) {
  return name + age;
}

hello3('sadhu', 21)

