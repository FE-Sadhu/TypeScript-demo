interface ClockConstructor {
  new (hour: number, minute: number): ClockInterval
}

interface ClockInterval {
  tick()
}

class DigitalClock implements ClockInterval {
  constructor(h: number, m: number) { }
  tick() {
    console.log('digital - xxx')
  }
}

class AnalogClock implements ClockInterval {
  constructor( h: number, m: number ) { }
  tick() {
    console.log('analog - xx')
  }
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterval {
  return new ctor(hour, minute)
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 8)

// 如下就会出错，不符合 new 构造器签名
// class DigitalClock1 implements ClockConstructor {
//   constructor(h: number, m: number) { }
//   tick() {
//     console.log('digital - xxx')
//   }
// }