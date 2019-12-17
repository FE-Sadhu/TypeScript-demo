/**
 * 1. js 没有空值的概念，在 ts 中，可以用 void 表示一个函数没有任何返回值
 */

 function alertName(): void {
   console.log('name')
 }

/**
  * 2. 声明一个 void 类型的值没什么用，因为只能将它赋值为 undefined or null
  */

let unusable: void = null
