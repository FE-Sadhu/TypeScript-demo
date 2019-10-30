// 继承接口
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10

// 一个接口还可以继承多个接口

interface Shape2 {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square2 extends Shape2, PenStroke {
  sideLength: number
}

let square2 = {} as Square2
square2.color = 'blue'
square2.sideLength = 10
square2.penWidth = 5.0
