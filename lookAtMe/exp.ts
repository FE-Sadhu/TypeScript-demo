/**
 * 小试牛刀一波？
 * 
 * 1. 参数限制为一个对象
 * 2. 观察者有 on 方法
 * 3. 建立起 on 方法的第一个参数与对象的 key 的映射关系
 * 4. 推断出 on 方法的第二个参数的类型
 * 
 */

let makeWatchedObject: any;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on("firstNameChanged", newName => {
  if (newName < 0) {
    console.warn("warning! negative age");
  }
});

person.on("ageChanged", newAge => {
  console.log(`new name is ${newAge.toUpperCase()}`);
})
