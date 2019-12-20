/**
 * 元组可以看成一次性约束了不同类型的数组。
 */

 let tom: [number, string] = [22, 'sadhu'];

//  tom[0] = 's' // err

 // 在对其初始化或者赋值的时候，需要提供所有元组类型中指定的项。

 let sadhu: [number, string];
 sadhu = [1, 'a'];

 // 但是通过已知索引的方式赋值可以不用赋值完。 没意义。

 let sadhu1: [number, string];
 sadhu1[0] = 1;
 console.log(sadhu1); // 虽然可以赋值完，但是会报错。因为编译过后，元组也就是 var sadhu1 。直接 sadhu1[0] 的话会报 undefined 没有属性 0


/**
 * 添加越界元素时，添加的元素的类型会被限制为元组中的每个类型的联合类型。 
 * 注意 -> 不能直接按索引添加越界元素，会被 元组 限制。 -> timeout[2] = 'sadhu'; 下面的例子来说，这也是报错的。因为 tuple 限制了长度为 2 ，没有已有索引 2。
 */

 let timeout: [string, number];
 timeout = ['ajax', 3000];
 timeout.push('sadhu');
 timeout.push(3);
 timeout.push(true); // 报错