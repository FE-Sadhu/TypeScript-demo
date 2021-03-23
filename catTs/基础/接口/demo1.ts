/**
 * 在 TS 中，我们使用接口来定义 对象 的类型。（我之前写的定义类型的方式是对原始数据变量而言的，就直接 let value: type; 就行）
 */

// 接口这个定义在面向对象语言中，表示的是对行为的抽象，而这个行为具体如何行动，则要由 类(classes) 去 实现(implement)。
// 在 TS 中，接口是个非常灵活的概念。既可用于对类的一部分行为进行抽象，也常用于对 「对象的形状(shape)」 进行描述。（也可以描述数组、函数的形状噢，很灵活）

 interface Person {
   name: string;
   age: number;
 }
 let tom: Person = { // 这个例子中， Person 这个接口就约束了 tom 对象的形状，两者必须一致，多一个少一个属性都不行。
   name: 'sadhu',
   age: 21
 }

// 多一个少一个属性都不行。

let tom1: Person = {
  name: 'sadhu'
}

let tom2: Person = {
  name: 'sadhu',
  age: 21,
  other: ''
}
