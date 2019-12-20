/**
 * 怎样定义泛型接口
 */

 // 方式一 -> 接口里面定义泛型函数
 interface CreateArrayFunc {
   <T>(length: number, value: T): Array<T>
 }
 let createArray: CreateArrayFunc;
 createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
 }

 createArray(3, 'x'); // ['x', 'x', 'x']

 // 方式二 -> 定义泛型接口
 interface CreateArrayFunc1<T> {
   (length: number, value: T): Array<T>;
 }

 let createArray1: CreateArrayFunc1<any>; // 一定注意，在使用泛型接口的时候，需要定义泛型的类型。 因为使用了。
 createArray1 = function<T>(length: number, value: T): Array<T> {
   const result: T[] = [];

   for (let i = 0; i < length; i++) {
     result[i] = value;
   }

   return result;
 }

 createArray1(3, 'x'); // ['x', 'x', 'x']