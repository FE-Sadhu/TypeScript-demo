/**
 * 可以把元组理解为每个元素数据类型和长度都是固定的数组，超出范围不能保证其类型。
 */

 let tom: [number, string] = [22, 'sadhu'];

 tom[0] = 's' // err

 // 在对其初始化或者赋值的时候，需要提供所有元组类型中指定的项。

 let sadhu: [number, string];
 sadhu = [1];
 sadhu = [1, 'a'];


/**
 * 添加越界元素时，添加的元素的类型会被限制为元组中的每个类型的联合类型。 
 */

 let timeout: [string, number];
 timeout = ['ajax', 3000];
 timeout.push('sadhu');
 timeout.push(3);
 timeout.push(true); // 报错

//  注意 -> 不能直接按索引添加越界元素，会被 元组 限制。 
// 因为 tuple 限制了长度为 2 ，没有已有索引 2。
timeout[2] = 'sadhu'; 

