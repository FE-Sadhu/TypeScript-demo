// class Animal {
//   name: string; // 等同于这样定义 -> public name: string

//   constructor (name: string)  { // 等同于 public constructor ...
//     this.name = name
//   }

//   move (distance: number = 0) { // 等同于  public move...
//     console.log(`${this.name} moved ${distance}m`)
//   }
// }

class Animal3 {
  private name: string; 

  constructor (name: string)  { 
    this.name = name
  }

  move (distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

new Animal3('cat').name  // 私有属性不能在类外部访问

class Rhino extends Animal3 {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

let animal = new Animal3('Groot')

let rhino = new Rhino()

let employee = new Employee('Bob')

animal = rhino // 可以赋值的，因为 Rhino 是 Animal3 的子类，可以兼容

animal = employee // 两个私有成员虽然声明方式一样， 但是不同类中的 private 声明的来源不同，所以不能兼容，也就不能赋值