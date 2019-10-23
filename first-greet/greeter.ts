// demo 1
function greeter (person: string) { // 类型注解会明确参数个数以及参数类型
  return 'Hello ' + person;
}

const user = 'Sadhu';

console.log(greeter(user));

// demo 2
interface Person { // 使用接口去规范定义类型注解
  first: string
  last: string
}

function greeter2(person: Person) {
  return 'Hello ' + person.first + ' ' + person.last
}

let user2 = {
  first: 'sadhu',
  last: 'wu'
}

console.log(greeter2(user2))

// demo 3
class User {
  full: string
  first: string
  last: string

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
    this.full = this.first + ' ' + this.last
  }
}

function greeter3(person: Person) {
  return 'Hello ' + person.first + ' ' + person.last
}

let user3 = new User('sadhu', 'wu')

console.log(greeter3(user3))