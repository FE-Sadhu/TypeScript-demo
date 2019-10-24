// 只读属性
// 保证之后只能只读
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = {
  x: 10,
  y: 20
}

p1.x = 5 // 报错，因为是 readonly 的接口去规范的 p1 对象。

// 除了 readonly ，还有 ReadonlyArray<type> 类型去规范数组
// 1. 保证数组创建后再也不能被修改
// 2. 该类型的值也不能赋值给别人

let a: number[] = [1, 2, 3, 4]
// let a1: Array<number> = [1, 2, 3, 4] 与上面写法结果一样
let ro: ReadonlyArray<number> = [1, 2, 3, 4]

ro[0] = 12 // 出错，因为只读
ro.push(5) // 出错，因为只读
ro.length = 100 // 出错，因为只读

a = ro // 出错，不能赋值给别人

// 但是可以用类型断言去重写类型，则不会出错
a = ro as number[] // 程序员坚定是 数字数组 类型，所以用类型断言直接重写


// readonly vs const
作为变量使用的话用 const 
作为属性要求只读的话则使用 readonly
