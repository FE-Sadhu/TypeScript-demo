/**
 * 有时我们希望对象不要完全匹配一个接口的形状，就可以用可选属性。（这个不完全匹配接口形状的情况也是 只能少不能多。 可以忽略可选，但绝不能新增。 ）
 */

 interface Person {
   name: string,
   age?: number
 }

 let tom: Person = { // age 属性可以不存在
   name: 'sadhu'
 }

 let tom1: Person = { // 自然也可以存在
   name: 'sadhu',
   age: 21
 }