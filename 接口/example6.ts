// 类类型接口
// 这个接口去规范类里面，一定要有哪些东西
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  
  constructor(h: number, m: number) {

  }

  setTime(d: Date) {

  }
}
