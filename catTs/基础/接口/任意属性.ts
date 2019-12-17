/**
 * 1. 有时我们希望，能用接口描述对象的任意形状。换句话说，希望一个接口允许对象可以有任意属性，可以用如下签名方式。
 */

 interface Person {
   name: string;
   age?: number;
   [propName: string]: any; // 使用 [propName: string]: any; 定义了任意属性类型为 string 的属性，并且其值的类型为 any。
 }
 let sadhu: Person = {
   name: 'sadhu',
   gender: 'male', // 任意属性
   jobAge: 0.1 // 任意属性
 }
 
/**
 * 2. 需要注意的是，定义了任意属性后，确定属性以及可选属性的值，必须是任意属性的值的类型的子类型。
 */

 // 举个例子
 interface Person1 {
   name: string;
   age: number; // 报错， number 类型不是 string 的子类。
   [propName: string]: string
 }

 interface Person2 {
  name: string;
  age?: boolean; // 可选属性也报错， boolean 类型不是 string 的子类。
  [propName: string]: string
 }

 // 如果强行用 Person1 接口定义对象类型的话，我们来看看打印的报错信息。
 let tom: Person1 = {
   name: 'tom',
   age: 21,
   gender: 'male'
 }
 // 这里的报错信息告诉我们，tom 对象被类型推断为了：
//  {
//    [x: string]: string | number;
//    name: string;
//    age: number;
//    gender: string
//  }
// 这显然与我们定义的 Person1 的接口不符合。