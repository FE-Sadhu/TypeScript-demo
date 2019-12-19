/**
 * 与接口的可选属性一样，定义可选参数也是用 ? 号。
 * 
 * 有个值得注意的是，ES6 的参数默认值方法也在 TS 中适用。 TS 默认识别为可选参数，但是不受「可选参数必须接在必需参数后面」的限制了。
 */

 function hello (name: string, age?: number) {
    if(age) {

    } else {

    }
 }

 hello('sadhu');
 hello('sadhu', 21);

 // 注意 -> 可选参数一定要在最后面定义，也就是说可选参数后面不允许再出现必需参数了。

 function hello1 (age?: number, name: string) { // err: 必选参数不能位于可选参数后

 }