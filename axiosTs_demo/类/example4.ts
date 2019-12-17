class Person {
  protected name: string

  constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  getElevatorPitch() {
    return `hello, my name is ${this.name} and i work in ${this.department}` // 这里是在子类内部访问 protected 保护变量，可以访问到
  }
}

let howard = new Employee('Howard', 'Sales')

console.log(howard.getElevatorPitch()) // 可以访问到父类的保护变量 Name，因为 getEl... 方法在 子类内部

console.log(howard.name) // 属性“name”受保护，只能在类“Person”及其子类中访问。




