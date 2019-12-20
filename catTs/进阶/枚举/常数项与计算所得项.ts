/**
 * 为什么要区分这个？
 * 因为计算所得项只能放在枚举的最后一项手动指定，因为其后面的枚举项不会默认递增了
 */

 enum Color {Red, Green, Blue = "blue".length};

//  "blue".length 就是一个计算所得项，后面不能跟枚举项，因为不能默认递增了，无法找到初始值。比如:
enum Color1 {Red = "blue".length, Green, Blue}; // err
/* 编译后
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = "blue".length] = "Red";
    Color1[Color1["Green"] = void 0] = "Green";
    Color1[Color1["Blue"] = void 0] = "Blue";
})(Color1 || (Color1 = {}));
*/

// 注意: 常规的一元运算符(+ - ~)、二元运算符(+ - * / 与或非等)是属于常数枚举表达式。不归类于计算所得项目。
enum Color2 {Red = 1 + 1, Green, Blue}
enum Color3 {Red = 1 * 1, Green, Blue}