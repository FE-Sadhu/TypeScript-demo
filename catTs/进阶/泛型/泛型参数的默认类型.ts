/**
 * 定义了泛型，当在使用时没有在代码中直接指定类型参数，或者从实际值中也无法推测出时，这时默认类型就会起作用。
 */

 function creatArray<T = string>(length: number, value: T): Array<T> {
   let result: T[] = [];
   for (let i = 0; i < length; i++) {
     result[i] = value;
   }

   return result;
 }


 interface Sadhu<T = number> {
   one: T
 }

 let obj: Sadhu; // 在使用这个接口时没有具体指定泛型类型，从实际值中也无法推测出，所以用泛型默认类型 number
 console.log(obj.one.length); // err number 类型没有 length 属性。