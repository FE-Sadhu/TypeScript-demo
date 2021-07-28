/**
 * 类型断言就是手动指定一个值的类型
 * 
 * 两种定义方式：
 * 1. (<type>value)
 * 2. (value as type)   在 tsx 语法中(React 的 jsx 语法的 ts 版)必须使用这种
 */

 function getLength(sth: string | number): number {
  if (sth.length) { // err: 因为 length 属性不是联合类型 number 和 string 公有的。
    return sth.length; // err: 因为 length 属性不是联合类型 number 和 string 公有的。
  } else {
    return sth.toString().length;
  } 
}


function getLength1(sth: string | number): number {
 if ((sth as string).length) { // 类型断言解决。
  return (<string>sth).length;
 } else {
  return
 }
}

// 注意 -> 断言并不是类型转换，断言成一个联合类型中不存在的类型是不允许的。

let x: number | string;
x as number
x as boolean // err  
x as unknown as boolean
