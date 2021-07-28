/**
 * 定义 -> 泛型是指，在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */

 // 例子。 实现个函数 createArray，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值。

 function createArray(length: number, value: any): Array<any> {
  let result: any[] = [];
  for(let i = 0; i< length; i++) {
    result[i] = value
  }
  return result;
}

// 现在我们不知道输入的 value 是什么类型的值。所以返回值直接用 Array<any> 去定义。 这个 any ，就代表我们没有准确去定义返回值的类型。
// 此时就可以用泛型
// 用泛型改写。
function createArray1<T>(length: number, value: T): Array<T> { // 函数名后名加 T ，代指任意输入的类型。加了后在函数内部、在后面的输入 value: T 和输出 Array<T> 就可以用 T 了
 let result: T[] = [];
 for(let i = 0; i< length; i++) {
   result[i] = value
 }
 return result;
}

// 改写后，我们输入的是字符串，那输出就是字符串数组。输入的是数组，那么输出的就是数字数组了。

const arr = createArray1(3, '11');
const arr1 = createArray1(3, 1);

/**
 * 定义泛型的时候，可以一次性定义多个类型参数
 * 
 */
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const a = swap([1, 's'])


/**
 * 根据泛型的定义，我们在具体使用前，是不知道具体类型的。所以自然也不能用某些方法，因为不知道是不是公有的。 如例 1
 * 
 * 此时我们就可以用泛型约束。 -> 所谓约束，就是我们控制它，强行设置 泛型变量 包含某方法/属性。那这样我们也要确保我们之后输入的变量就是有这个方法/属性的，如果没有则编译时会报错
 * 
 * 设置方式可以是  ->  给泛型变量  extends 继承一个接口。接口中包含方法 / 属性。如例 2
 */

 // 例 1
 function loggingIdentity<T>(arg: T): T {
  console.log(arg.length); // err: 泛型，不确定是否有 length 方法。
  return arg;
}

// 例 2
interface LengthAllow {
   length?: number;
}

function loggingIdentity1<T extends LengthAllow>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity1(1);
loggingIdentity1('q');
// 可以含约束以外的 Property
loggingIdentity1({
  length: 1,
  b: '2'
});



/**
 * 多个类型参数(泛型变量)之间也可以互相约束
 */

function copyFields<T extends U, U>(target: T, source: U): T { // 确保了 U 中不会存在 T 中没有的字段。
 // ... source
 return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 });




/**
 * 定义泛型接口
 */

 // 方式一 -> 接口里面定义泛型函数
 interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>
}
let createArray2: CreateArrayFunc;
createArray2 = function(length, value) {
   let result = [];
   for (let i = 0; i < length; i++) {
       result[i] = value;
   }
   return result;
}

const c22 = createArray2(3, 'x'); // ['x', 'x', 'x']

// 方式二 -> 定义泛型接口
interface CreateArrayFunc1<T> {
  (length: number, value: T): Array<T>;
}

let createArray3: CreateArrayFunc1<number>; // 在使用泛型接口的时候，定义泛型的类型。 泛型就是定义的不需要明确指定类型，使用的时候一定要指明。
createArray3 = function(length, value) {
  const result = [];

  for (let i = 0; i < length; i++) {
    result[i] = value;
  }

  return result;
}

const c33 = createArray3(3, 'x'); // ['x', 'x', 'x']


/**
 * 定义泛型类
 */

 class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T
}

let MyGenericNumber = new GenericNumber<number>() // 定义泛型类，在使用的时候要指定类型。
MyGenericNumber.zeroValue = 0;
MyGenericNumber.add = function(x, y) {
  return x + y;
}
const res = MyGenericNumber.add(1, 2);
MyGenericNumber.add(1, 's'); // 报错  泛型类在使用的时候已经指定了类型为 number 。
