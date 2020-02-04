/**
 * 1. TS 实现了所有 ES6 中类的操作
 * 2. TS 的类中可以使用几种修饰符，public(默认都是公有属性和方法) private protected readonly abstract
 * 
 *  2.1 public 修饰的是公有属性和方法。 默认不添加，都是 public 修饰的
 *  2.2 private 修饰的是私有属性和方法、在该声明的类外不允许访问。继承的子类也不允许访问。
 *  2.3 protected 修饰的是保护属性和方法，不允许在类外访问。但是继承的子类中可以访问。
 * 
 *  2.4 readonly 修饰只读属性，只允许出现在属性声明或索引签名中。修饰的时候，书写上排在 public private 这些的后面 -> public readonly name = 'Sadhu'
 * 
 *  2.5 abstract 修饰的是 抽象类 和 抽象方法。
 *      抽象类不能被实例化、只能作为被继承的基类。
 *      抽象方法一定要在子类中实现。
 * 
 *  后续补充（做 axios 库拦截器部分的自定义 forEach 方法）：
 * 
 *  ------> 类在 TS 中可以作为类型系统来用，等同于转化成了接口去修饰别人 <-----
 * 
 *  如：类 A 中提前声明了变量 x: number ，也写了原型上的方法 use(), eject(), forEach()，
 *  当我们把类 A 当做类型系统去描述一个属性时，如 
 *  interface xxx {
 *    b: A
 *  }
 *  此时的类 A 在类型系统就可以理解为转化成了接口 {
 *    x: number
 *    use()
 *    eject()
 *    forEach()
 *  }
 * 
 *  那自然的，被限制类型的 b 变量的类型就是: {
 *   x: number
*    use()
*    eject()
*    forEach()
 * }
 * 
 */

 // 对于 几个修饰符的例子

 class Animal {
   private name: string;
   public readonly age: number;

   public constructor(name, age) {
    this.name = name;
    this.age = age
   }
   protected sayHello(): string {
     return this.name + '...'
   }
 }

 class cat extends Animal {
   constructor(name, age) {
     super(name, age)
     console.log(this.name) // 报错， 属性“name”为私有属性，只能在类“Animal”中访问
   }
   protected say(): string {
     return super.sayHello() // 保护方法可以在子类中访问
   }
 }

 let sadhu = new Animal('sadhu', 40)
 let tom = new cat('tom', 21)
 sadhu.name; // 私有属性不能在类外部访问。
 tom.say(); // 保护属性不能在类外部访问。
 sadhu.age = 22; // readonly 不允许改变




