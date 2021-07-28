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

/**
 * 4. 可选参数
 * 与接口的可选属性一样，定义可选参数也是用 ? 号。
 */

 function hello4 (name: string, age?: number) {
  if(age) {

  } else {

  }
}

hello4('sadhu');
hello4('sadhu', 21);

// 注意 -> 可选参数一定要在最后面定义，也就是说可选参数后面不允许再出现必需参数了。

function hello5 (age?: number, name: string) { // err: 必选参数不能位于可选参数后

}

// 有个注意的是，ES6 的参数默认值方法在 TS 中默认识别为可选参数，但是不受「可选参数必须接在必需参数后面」的限制了。