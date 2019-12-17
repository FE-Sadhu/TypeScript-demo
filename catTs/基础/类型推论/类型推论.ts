/**
 * 1. 如果在定义时赋值，那么 ts 会在没有明确指定类型的时候推测出一个类型，这就是类型推论
 */

 let a = 'five'; // 变量 a 被推测为 string 类型，等价于  let a: string = 'five';
 a = 5; // 报错
 
/**
 * 2. 如果定义时没赋值，那么默认为 any 类型，之后对此变量的任何操作的返回内容都是默认 any 类型。
 */

 let b;
 b = '7'
 b = 7
 b.setName('sadhu').sayHello()