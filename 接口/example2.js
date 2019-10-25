function createSquare(config) {
    var newSquare = {
        color: 'white',
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({
    colour: 'black',
    width: 100
});
console.log(mySquare);
// 1. 可选属性好处之一是可以对可能存在的属性进行预定义
// 2. 好处二是可以捕获引用不存在的属性时的错误，如下例子
// interface Square {
//   color: string,
//   area: number
// }
// interface SquareConfig {
//   color?: string, // 这种 ? 定义的接口就是不是必需的。
//   width?: number
// }
// function createSquare(config: SquareConfig): Square {
//   let newSquare = {
//     color: 'white',
//     area: 100
//   }
//   if (config.color) {
//     // Error -> 属性“colo”在接口“SquareConfig”上不存在。你是否指的是“color”?
//     newSquare.color = config.colo
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }
// let mySquare = createSquare({
//   color: 'red'
// })
// console.log(mySquare)
