interface Alarm {
  price: number;
}

interface Alarm {
  weight: number;
}

// 相当于

interface Alarm {
  price: number;
  weight: number;
}

// 注意，合并的类型必须是唯一的。

interface Alarm {
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
interface AAA {
  price: number;
  weight: number;
  alert(s: string): string; // 输入 string ，输出必须 string
  alert(s: string, n: number): string;
}