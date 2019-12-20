/**
 * 抽象类 是供其他类继承的基类。
 * 不允许被实例化
 * 抽象方法必须被子类实现
 * 
 * TS 中用 abstract 定义抽象类和其中的抽象方法。
 * 同时使用  abstract 的时候也要跟在 public、private 等的后面哦。
 */

abstract class Animal { // 抽象类不能实例化，只能被继承
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public abstract sayHi(); // 抽象方法必须在子类中被实现
}

// class Cat extends Animal { // 报错，没有实现父类的抽象方法。
//   public eat() {
//     console.log('xxx')
//   }
// }

class Dog extends Animal {
  // constructor(name) { // -> 如果不想在子类中添加其他实例属性的话，可以不加子类的构造器。默认和父类一样。
  //   super(name)
  // }
  public sayHi() {
    console.log(this.name + '...')
  }
}

let dog = new Dog('name');
dog.sayHi()
