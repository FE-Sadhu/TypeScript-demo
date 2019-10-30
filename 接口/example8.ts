// 类只检查实例部分，不检查静态部分（constructor 属于静态部分）
interface ClockConstructor {
  new (hour: number, minute: number) // 比如说利用 构造器签名 new 
}

class Clock implements ClockConstructor {
  currentTime: Date
  constructor(h: number, m: number) {}
} // 检测不到构造器签名，因为只检测实例部分。

// 解决方案接 example9.ts

