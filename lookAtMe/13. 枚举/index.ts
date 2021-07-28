/**
 * TypeScript 的枚举类型的概念来源于 C#
 * 枚举类型用于取值被限定在一定范围内的场景。用 enum 定义。
 * 比如 一周七天 ，比如颜色限定为红绿蓝。
 * 
 */

 enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
 // 枚举成员默认从 0 开始递增。枚举值和枚举名会反向映射。
 console.log(Days["Sun"] === 0); // true
 console.log(Days["Mon"] === 1); // true
 console.log(Days["Tue"] === 2); // true
 console.log(Days["Sat"] === 6); // true
 
 console.log(Days[0] === "Sun"); // true
 console.log(Days[1] === "Mon"); // true
 console.log(Days[6] === "Sat"); // true
 
 console.log(Days)

 // 还可以手动给每个 枚举项 赋值
 // 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：

enum Days1 {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days1["Sun"] === 3); // true
console.log(Days1["Wed"] === 3); // true
console.log(Days1[3] === "Sun"); // false -> 编译后 被 Days1[Days1["web"] = 3] = "Web" 覆盖了。
console.log(Days1[3] === "Wed"); // true


// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）
// 前两个例子都是常数项，一个典型的计算所得项的例子：
enum Color {Red, Green, Blue = "blue".length};

// "blue".length 就是一个计算所得项

// 计算所得项只能放在枚举的最后一项手动指定，因为其后面的枚举项不会默认递增了，找不到初始值
enum Color1 {Red = "blue".length, Green, Blue};

// 需要注意一点就是: 常规的一元运算符(+ - ~)、二元运算符(+ - * / 与或非等)是属于常数枚举表达式。不归类于计算所得项目。
enum Color2 {Red = 1 + 1, Green, Blue}
enum Color3 {Red = 1 * 1, Green, Blue}

/**
 * 上面讲的都是普通枚举操作
 * 还有常数枚举和外部枚举
 */

 // 常数枚举使用 const enum 定义的，外部枚举用 declare enum 定义, declare enum 只用于声明文件中
 // 它们与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

 const enum Directories {
  Up,
  Down,
  Left,
  Right
}

let direcories = [Directories.Up, Directories.Down, Directories.Left, Directories.Right];

// 上面整段代码编译结果是 -> var direcories = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

declare enum Directions1 {
  Up,
  Down,
  Left,
  Right
}

let directions1 = [Directions1.Up, Directions1.Down, Directions1.Left, Directions1.Right];
// 在业务代码中使用的话找不到枚举，上面整段代码编译结果是 -> var directions1 = [Directions1.Up, Directions1.Down, Directions1.Left, Directions1.Right];