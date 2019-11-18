// readonly 关键字

class Person {
  readonly name: string

  constructor(name: string) {
    this.name = name
  }
}

const jogh = new Person('john')

jogh // 访问不报错

jogh = 'xxx' // 修改要报错

// 可以利用 参数属性 简写
// 什么是参数属性，如下，直接在构造器参数中修饰

class Person1 {
  constructor(readonly name: string) {} // 也可以用 public private 修饰
}

const jogh1 = new Person1('jogh')
console.log(jogh1.name) // 输出 -> jogh 
jogh1.name = 'xx' // 报错，只读。

// 参数属性太简写了，不明显，代码复杂了不太好看，推荐上面那种声明好的写法

