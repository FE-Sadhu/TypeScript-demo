/**
 * 之前讲接口的时候介绍过， TS 的接口很灵活，可以对对象、函数的形状进行描述。 也可以对类的一部分行为进行抽象。
 * 这里我们就着重讨论对类的一部分行为进行抽象。
 * 
 * 实现（implements）是面向对象中的一个重要概念。
 * 一般来讲，一个类只能继承自另一个类，但有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），
 * 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。
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
  // ...
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
 * 接口也可以继承类
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