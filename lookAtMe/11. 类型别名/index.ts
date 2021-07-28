/**
 * type 设置别名。
 * 常规规范，首字母用大写。
 */

 type Name = string;
 type NameResolve = () => string;
 type NameOrResolver = Name | NameResolve;
 
 function getName(n: NameOrResolver): Name {
   if (typeof n === 'string') {
     return n;
   } else {
     return n();
   }
 }

// 当直接将字面量用作变量类型时，字面量就类似为一个类型别名
let a: {a: 1, b: 2}

a = {};
a = {a: 1, b: 2}

let b: '1'

b = 1
b = '1'