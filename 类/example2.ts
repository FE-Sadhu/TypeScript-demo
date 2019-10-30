// 类继承
class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m.`)
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!')
  }
}

const dog = new Dog()

dog.bark()
dog.move(10)

// 更复杂的例子
class Animal1 {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`)
  }
}

class Snake extends Animal1 {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 5) { // 重写 move 方法
    console.log('Slithering...')
    super.move(distance) // 继承父类中的方法
  }
}

class Horse extends Animal1 {
  constructor(name: string) {
    super(name)
  }
  move(distance: number = 45) { // 重写 move 方法
    console.log('马叫...')
    super.move(distance) // 继承父类中的方法
  }
}

let sam = new Snake('Sammy')
let tom: Animal = new Horse('Tommy')

sam.move()
tom.move(34)
