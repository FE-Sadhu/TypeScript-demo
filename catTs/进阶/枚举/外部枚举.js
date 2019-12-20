/**
 * 外部枚举与声明语句一样，常出现在声明文件中。  类似于， 声明枚举 。
 * 用 declare
 *
 * 也和声明语句一样，仅存在编译时校验，编译后会删除代码。
 */
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// 编译结果： var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
