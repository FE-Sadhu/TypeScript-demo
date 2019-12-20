/**
 * 定义 -> 泛型是指，在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */

 // 例子。 实现个函数 createArray，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值。

 function createArray(length: number, value: any): Array<any> {
   let result: any[] = [];
   for(let i = 0; i< length; i++) {
     result[i] = value
   }
   return result;
 }

 // 现在我们不知道输入的 value 是什么类型的值。所以返回值直接用 Array<any> 去定义。 这个 any ，就代表我们没有准确去定义返回值的类型。
 // 此时就可以用泛型
// 用泛型改写。
function createArray1<T>(length: number, value: T): Array<T> { // 函数名后名加 T ，代指任意输入的类型。加了后在函数内部、在后面的输入 value: T 和输出 Array<T> 就可以用 T 了
  let result: T[] = [];
  for(let i = 0; i< length; i++) {
    result[i] = value
  }
  return result;
}

// 改写后，我们输入的是字符串，那输出就是字符串数组。输入的是数组，那么输出的就是数字数组了。

