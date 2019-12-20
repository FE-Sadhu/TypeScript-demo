/**
 * 枚举类型用于取值被限定在一定范围内的场景。用 enum 定义。
 * 比如 一周七天 ，颜色限定为红绿蓝。
 * 
 * 这里如果忘了就看看编译后的 js 代码，看看就知道了。
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
// 其编译后的 js 代码
/*
var Days;
(function () {
  Days[Days["Sun"] = 0 ] = "Sun";
  Days[Days["Mon"] = 1 ] = "Mon";
  Days[Days["Tue"] = 2 ] = "Tue";
  ... 
  Days[Days["Sat"] = 6 ] = "Sat";
})(Days || (Days = {}))
*/

