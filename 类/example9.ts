// 静态属性
// 没再讨论 实例属性 了

class Grid {
  static origin = {x: 0, y: 0} // 记住，静态属性是在 类 上的了，而不是在实例上的了。访问的时候用的是 Grid.origin 而非 this.origin

  scale: number // 实例属性

  constructor(scale: number) {
    this.scale = scale // 缩放比例
  }

  calculateDistanceFromOrigin(point: {x: number, y:number}) {
    let xDist: number = point.x - Grid.origin.x // 而非 this.origin
    let yDist: number = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4})) // 5

console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4})) // 25