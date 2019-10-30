// 类与接口
// 有时候不同的类之间可能会有一些共同的特性，我们就可以把这些特性提取成接口。
// 比如防盗门和汽车都有报警功能


interface Alarm {
  alert();
  shunk();
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('xxxxx')
  }
  shunk() {

  }
}

// class Car implements Alarm { // Error： Property 'shunk' is missing in type 'Car' but required in type 'Alarm'.
//   alert() {
//     console.log('xxxx')
//   }
// }

// 接口描述了类的公共部分，它不会检测类的私有部分。
class Test implements Alarm {
  constructor () {
    function alert() {
      console.log('不描述私有部分')
    }
    function shunk() {
      console.log('不描述私有部分')
    }
  }
  alert () {
    console.log('接口只描述了这里的公共部分');
  }

  shunk() {
    console.log('只描述公共部分')
  }

  other() {
    
  }
}

new Test().alert()