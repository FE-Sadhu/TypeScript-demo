/**
 * 常数枚举使用 const enum 定义的
 * 与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。
 */

const enum Directories {
  Up,
  Down,
  Left,
  Right
}

let direcories = [Directories.Up, Directories.Down, Directories.Left, Directories.Right];

// 上面整段代码编译结果是 -> var direcories = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

