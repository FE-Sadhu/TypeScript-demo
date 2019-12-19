/**
 * 所谓函数重载就是输入不同数量 or 类型的参数时，作不同的处理。
 * 我们可以用 联合类型 来实现。
 */

 // 比如输入 123 ，输出为 321。
 // 输入 'abc' ，输出为 'cba'。

 function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
      return x.split('').reverse().join('')
    }
 }

 console.log(reverse(123));
 console.log(reverse('abcd'));

/**
 * 注意，其实此时我们有个缺点，就是不能精准地表达。
 * 什么意思呢？
 * 比如，我们肯定想要，如果输入是数字的话，输出应该也是数字。输入是字符串，输出也应该限制为字符串。
 * 这样怎么做呢？
 * 
 * 此时我们就可以使用 重载 定义多个 reverse 的函数类型。
 */

function reverse1(x: number): number; // -> 重点： 重载的方式，精确限定输入数字，输出数字。
function reverse1(x: string): string; // -> 重点： 重载的方式，精确限定输入字符串，输出字符串。
function reverse1(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
// 上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。
// TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。