/**
 * 函数重载就是函数的声明合并
 */

 function reverse(x: string): string; // 输入字符串，输出字符串
 function reverse(x: number): number; // 输入数字，输出数字
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
      return x.split('').reverse().join('');
  }
}

/**
 * 接口声明合并
 */
interface Alarm {
  price: number;
}

interface Alarm {
  weight: number;
}

// 相当于

interface Alarm1 {
  price: number;
  weight: number;
}

// 注意，合并的类型必须是唯一的。

interface Alarm1 {
  price: string; // 报错 -> 因为类型不与上面声明的一致，合并不了。
}

/**
 * 接口中方法的合并，与函数的合并(重载)一样。
 */

interface AAA {
  price: number;
  alert(s: string): string;
}

interface AAA {
  weight: number;
  alert(s: string, n: number): string;
}

// 等同于
interface AAA1 {
  price: number;
  weight: number;
  alert(s: string): string;
  alert(s: string, n: number): string;
}


/**
 * 类的合并和接口的合并规则一致
 */