/**
 * 根据泛型的定义，我们在具体使用前，是不知道具体类型的。所以自然也不能用某些方法，因为不知道是不是公有的。 如例 1
 * 此时我们就可以用泛型约束。 -> 所谓约束，就是我们控制它，强行设置 泛型变量 包含某方法/属性。那这样我们也要确保我们之后输入的变量就是有这个方法/属性的，如果没有则编译时会报错
 * 
 * 设置方式可以是  ->  给泛型变量  extends 继承一个接口。接口中包含方法 / 属性。如例 2
 */

 // 例 1
 function loggingIdentity<T>(arg: T): T {
   console.log(arg.length); // err: 泛型，不确定是否有 length 方法。
   return arg;
 }

 // 例 2
 interface LengthAllow {
    length: number;
 }

 function loggingIdentity1<T extends LengthAllow>(arg: T): T {
   console.log(arg.length);
   return arg;
 }

 /**
  * 多个类型参数(泛型变量)之间也可以互相约束
  */
 
 function copyFields<T extends U, U>(target: T, source: U): T { // T 继承 U。这就确保了 U 中不会存在 T 中没有的字段。
  for (let id in source) {
      target[id] = (<T>source)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });
