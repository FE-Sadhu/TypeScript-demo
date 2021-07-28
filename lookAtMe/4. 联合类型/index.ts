/**
 * 1. 联合类型表示取值可以为多种类型中的一种
 */

 let myFavoriteNumber: string | number;
 myFavoriteNumber = '5'
 myFavoriteNumber = 5
 myFavoriteNumber = true // 报错

/**
 * 2. 联合类型的变量访问的属性和方法，在真正赋值前只能访问共有的属性或方法，在赋值后会类型推断，那肯定只能访问该类型的属性或方法了
 */

 function getLength(sth: string | number): number {
    return sth.length; // 报错，因为 length 属性不是公有的， string 类型的值才有 length 属性，number 类型的没有。
 }

 let myAge: string | number;
 myAge = '5'; // 类型推断为 string
 myAge.length; // 不报错
 myAge = 5; // 类型推断为 number
 myAge.length; // 报错