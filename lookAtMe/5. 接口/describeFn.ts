/**
 * 我们知道了接口也可以用来描述函数的形状。 如例 1
 * 
 * 有时函数也有自己的属性和方法，就可以用混合类型接口去定义。 见例2
 */

 // 例 1
 interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}

// 例 2
interface Sadhu {
 (param: number): string;
 interval?: number; // static prop
 reset?: () => void // static prop
}

function getCounter() { // 返回值必须符合接口的约束
 let counter: Sadhu = function(param: number): string { return '' }
 counter.interval = 1;
 counter.reset = function() {}
 return counter;
}
