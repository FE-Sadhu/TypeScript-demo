/**
 * 基础章节介绍过，TS 的类很灵活，可以对对象、函数的形状进行描述。 也可以对类的一部分行为进行抽象。
 * 这里我们就着重学习对类的一部分行为进行抽象。
 * 
 * 不同的类之间可能有一些共同的特性，我们就可以把这公有的特性的提取成接口，让不同的类去实现（implements）
 * 
 */

 /*
 举个例子：
 有个门的类，防盗门是其子类。假设防盗门有个报警器功能方法。如果还有个汽车类也有报警器功能的话，我们就可以考虑把报警器
 功能提取出来，作为一个接口，让防盗门和车的类去 implements 实现它。
 */

 interface Alarm {
   alert()
 }
 class Door {

 }

 class SecurityDoor extends Door implements Alarm {
    alert() {
      console.log('SecurityDoor alert');
    }
 }

 class Car implements Alarm {
   alert() {
     console.log('Car alert');
   }
 }

/**
 * 一个类可以实现多个接口
 */
 interface Light {
   lightOn();
   lightOff();
 }

 class Car1 implements Alarm, Light {
   alert() {
     console.log('xxx');
   }
   lightOn() {
     console.log('xx');
   }
   lightOff() {
     console.log('xxxxxxx');
   }
 }

/**
 * 接口间可以继承
 */

 interface LightableAlarm extends Alarm {
   lightOn();
   lightOff();
 }

 /**
  * 接口也可以继承类 （类用 ES7 的定义实例属性的方法。也就是写在构造器外面嘛）
  */

  class Point {
    x: string;
    y: number
  }

  interface Point3d extends Point {
    z: number;
  }

  let point3d: Point3d = {
    x: 'x',
    y: 1,
    z: 2
  }