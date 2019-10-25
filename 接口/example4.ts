// 额外的类型检查 -> 也就是可选属性的坑(当直接传入字面量对象时)，仔细看我下面注释
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = {
    color: 'white',
    area: 100
  }

  if (config.color) {
    newSquare.color = config.color
  }

  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}

let mySquare = createSquare({
  colour: 'red', // 可选属性，传入的对象只能规范在 可选属性 的属性中之一，每个属性至少符合之一并且不允许任一个属性不符合之一。也不允许额外增加可选属性规范外的属性。
  width: 100
})

// 解决办法
// 1. 类型断言 -> 强制认为符合可选属性
// 如下：

let mySquare = createSquare({
  colour: 'red', // 可选属性，传入的对象只能规范在 可选属性 的属性中之一，每个属性至少符合之一并且不允许任一个属性不符合之一。也不允许额外增加可选属性规范外的属性。
  width: 100
} as SquareConfig)

// 2. 最佳的方式是添加一个 字符串索引签名
// 比如：
// 如果 SquareConfig 带有上面定义的类型的 color 和 width 属性，
// 并且还会带有任意数量的其它属性，那么我们可以这样定义它

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

// 3. 不直接传字面量对象，传变量。

let myObj = {
  colour: 'red', // 可选属性
  width: 100
}

let mySquare = createSquare(myObj)