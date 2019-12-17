// 布尔型 boolean
var isDone = false;
// 数字 number
var decLiteral = 20; // 十进制
var hexLiteral = 0x14; // 十六进制
var binaryLiteral = 20; // 二进制
var octalLiteral = 20; // 八进制
// 字符串 string
var name1 = 'sadhu';
name1 = 'smith';
var age = 21;
var sentence = "hello, my name is " + name1 + ". I'll be " + (age + 1) + " years old next month.";
// 数组
// 第一种： 在元素类型后面加上 []
var list = [1, 2, 3];
// 第二种： 数组泛型
var list2 = [1, 2, 3];
// 元组 Tuple
// 元组类型允许表示一个已知元素 数量 和 类型 的 数组 ， 各元素类型不必相同
var x;
x = ['hello', 10]; // OK
// x = [10, 'hello'] // Error
console.log(x[0].substr(1)); // OK ello
// console.log(x[1].substr(2)) // Error, number 不存在 substr 方法
// 当访问一个越界的元素，注：我们不应该再使用元组的越界元素，会报错
// x[3] = 'world' // OK 字符串可以赋值给元组规定的 (string | number) 类型
// console.log(x[5].toString()) // Error undefined 没有 toString 方法
// x[6] = true // Error 是可以成功赋值的，但是 TS 会报错，因为 true 不是元组定义的 string/number 类型
console.log(x);
// 枚举 enum 类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); // 编译成 js 后的是一个对象, 默认值从 0 开始编号 -> 0 1 2
var c = Color.Green;
console.log(Color); // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(c); // 1
// 把上面例子改成从 1 开始编号
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {})); // 从 1 开始编号 -> 1, 2, 3
console.log(Color2); // { '1': 'Red', '2': 'Green', '3': 'Blue', Red: 1, Green: 2, Blue: 3 }
// 也可以全部采用手动赋值
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
console.log(Color3); // { '1': 'Red', '2': 'Green', '4': 'Blue', Red: 1, Green: 2, Blue: 4 }
// 显然枚举类型有一个好处就是可以通过 值 找到 名字 。 注：数字是字符串 key
var c3 = Color3.Green; // c3 === 2
console.log(Color3[c3]); // Green
// any 
// -> 为不清楚类型的变量指定一个类型，不会在 ts 编译阶段报错
var notSure = 4;
notSure = 'a'; // 重新赋值 字符串 或 其他类型都不会报错
notSure = true;
// any 在定义不知道所有数据类型的数组也很方便，怎么修改都不会报错
var list3 = [1, 'a', true];
list3[0] = 'b';
// void 
// 跟在函数后面，省略来说代表没有返回值，准确说返回值没有任何类型，只能为 undefined 或 null
function warnUser() {
    console.log('This is my warning message');
}
function warnUser2() {
    console.log('This is my warning message');
    return undefined; // 没报错
}
function warnUser3() {
    console.log('This is my warning message');
    return null; // 没报错
}
// 申明一个 void 类型的变量没有什么大用，代表只能给变量赋予 undefined 和 null
var a = undefined;
// null 和 undefined
// 1. 在 ts 里面， undefined 和 null 和 void 一样，没有多大用
// 2. 这两个类型是所有类型的子类型，意味着可以把 null undefined 赋值给 number 类型的变量。
// 3. 如果指定了 --strictNullChecks 标记， null 和 undefined 就只能赋值给 void 类型和它们自身
// 4. 可以使用联合类型 比如 string | null | undefined ，就意味着某处我只想传入一个 字符串 或者 undefined/null
var u = undefined;
var t = 1;
t = u; // 不报错
var n = null;
a = n; // 非 --strictNullChecks 标记下，可以赋值给任何类型
var t2; // 采用联合类型
t2 = 'a';
t2 = null;
t2 = undefined;
// t2 = 1 // 报错
// never
// 1. 表示永不存在的值的类型，如 never 类型总是那些会抛出异常或根本不会有返回值的函数
// 的返回类型，比如死循环的函数就没有返回值。
// 2. never 类型可以是任何类型的子类型，即可以赋值给任何类型。但是不能被任何类型赋值。
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('something failed');
}
function infiniteLoop() {
    while (true) { }
}
create({ prop: 1 });
create([1, 2, 3]);
create(function a() { });
// create(1) // 报错
// create('a') // 报错
// create(true) // 报错
// create(undefined) // 报错
// 类型断言例子
// 使用方法一 -> 尖括号 <>
var someValue = 'This is some value';
var strLength1 = someValue.length;
console.log(strLength1);
var strLength = someValue.length;
// 使用方法二 -> as 关键字
var otherValue = 'This is other value';
var otherLength = otherValue.length;
