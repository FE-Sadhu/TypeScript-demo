/**
 * 就是函数重载
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