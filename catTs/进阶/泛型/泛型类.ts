/**
 * 怎样定义泛型类
 */

 class GenericNumber<T> {
   zeroValue: T;
   add: (x: T, y: T) => T
 }

 let MyGenericNumber = new GenericNumber<number>() // 定义泛型类，在使用的时候要指定类型。 因为泛型嘛，定义的不需要明确指定类型，使用的时候一定要指明。
 MyGenericNumber.zeroValue = 0;
 MyGenericNumber.add = function(x, y) {
   return x + y;
 }
 MyGenericNumber.add(1, 2);
 MyGenericNumber.add(1, 's'); // 报错  泛型类在使用的时候已经指定了类型为 number 。
