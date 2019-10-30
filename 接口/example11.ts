// 混合类型
// 一个对象同时作为函数和对象使用，并带有额外的属性
// (接口里面又定义属性有定义函数)

interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = (function(start: number) {}) as Counter // 返回值既含有 interval 又含有 reset(), 且符合 Counter 规则
  counter.interval = 123
  counter.reset = function () {}
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0