/**
 * 接口这个定义在面向对象语言中，表示的是对行为的抽象，而这个行为具体如何行动，则要由 类(classes) 去 实现(implement)。
 * 
 * 在 TS 中，接口是个非常灵活的概念。
 * 既可用于对类的一部分行为进行抽象，也常用于对 「对象的形状(shape)」 进行描述。
 * （也可以描述数组、函数的形状，但没那么常用）
 */

// 描述对象
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

/**
 * 有时我们希望对象不要完全匹配一个接口的形状，就可以用可选属性。（ 可以忽略可选，但绝不能新增。 ）
 */

 interface Person1 {
  name: string,
  age?: number
}

let tom3: Person1 = { // age 属性可以不存在
  name: 'sadhu'
}

let tom4: Person1 = { // 自然也可以存在
  name: 'sadhu',
  age: 21,
  gender: 'male' // 仍然不允许添加未定义的属性
}


/**
 * 有时我们希望，能用接口描述对象的任意形状。换句话说，希望一个接口允许对象可以有任意属性，可以用如下签名方式。
 */

 interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any; // 使用 [propName: string]: any; 定义了任意属性类型为 string 的属性，并且其值的类型为 any。
}

let sadhu: Person2 = {
  name: 'sadhu',
  gender: 'male', // 任意属性
  jobAge: 0.1 // 任意属性
}

let sadhu1: Person2 = {
  name: 'xx',
  other: {},
  other2: {},
 //  age: 1
}

// 需要注意的是，定义了任意属性后，确定属性以及可选属性的值，必须是任意属性的值的类型的子类型。
// 举个例子
interface Person3 {
  name: string;
  age: number; // 报错， number 类型不是 string 的子类。
  [propName: string]: string
}

interface Person4 {
 name: string;
 age?: boolean; // 可选属性也报错， boolean 类型不是 string 的子类。
 [propName: string]: string
}

/**
 * 若想对象的某个属性是只读的，可以在接口中用只读属性 readonly
 */

 interface Person5 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}
let tom5: Person5 = {
  id: 899,
  name: 'tom',
  gender: 'male'
}

tom.id = 1; // 报错，因为 id 属性在接口中已经描述为 只读 的了。