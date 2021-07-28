/**
 * 1. any 类型的值允许被赋值为任何类型
 */
 let loveNumber: any = 'five';
 loveNumber = 5;

/**
 * 2. 可以认为，声明一个变量为 any 之后，对它的任何操作，返回内容的类型都是 any 任意值。
 * 所以我们可以对 any 类型的变量做任何操作不会报错。
 */

 let a: any;
 a = 's';
 a.getNumber()
 a.setName('Sadhu')
 a.setName('Sadhu').sayHello();

/**
 * 3. 如果变量在未声明的时候，未指定其类型，那么它就会被识别为任意值类型
 */
 let c; // 默认 any 类型
 c = 'five';
 c = 5;
 c.setName('Sadhu').sayHello();

