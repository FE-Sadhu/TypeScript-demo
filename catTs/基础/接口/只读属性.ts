/**
 * 若想对象的某个属性是只读的，可以在接口中用只读属性 readonly
 */

 interface Person {
   readonly id: number;
   name: string;
   age?: number;
   [propName: string]: any;
 }
 let tom: Person = {
   id: 899,
   name: 'tom',
   gender: 'male'
 }

 tom.id = 1; // 报错，因为 id 属性在接口中已经描述为 只读 的了。

/**
 * 注意只读的约束，在第一次给对象赋值的时候就生效了，而不是第一次给只读属性赋值的时候生效。下面举例
 */

 interface Person2 {
   readonly age: number;
   name: string
 }

 let sadhu: Person2 = { // 这是第一次给对象赋值的时候。 这次的报错是没有赋 age 属性的值
  name: 'sadhu'
 }

 sadhu.age = 1; // 这是给只读属性赋值。 这里的报错是 age 是只读属性，不能赋值。