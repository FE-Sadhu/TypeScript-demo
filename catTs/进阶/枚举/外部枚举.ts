/**
 * 外部枚举与声明语句一样，常出现在声明文件中。  类似于， 声明枚举 。
 * 用 declare
 * 
 * 也和声明语句一样，仅存在编译时校验，编译后会删除代码。
 */

declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 编译结果： var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

/**
 * 同时使用 declare 和 const 也是可以的：
 */
declare const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 编译结果 -> var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];