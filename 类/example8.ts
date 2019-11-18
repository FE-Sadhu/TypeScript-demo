// 以下是 存取器
// 也就是在类中可以 getter setter 啦
// 可以借助存取器访问私有变量

let passcode = 'secret'

class Employee {
  private _fullName: string
  
  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode === 'secret') { // 计算操作符 & || | ^ 等号 左右两边只能是 'any', 'number', 'bigint' or an enum type
      this._fullName = newName
    } else {
      console.log('Error: 密码不对')
    }
  }
}

let employee = new Employee()

console.log(employee.fullName) // undefined
employee.fullName = 'Sadhu'
console.log(employee.fullName) // Sadhu

// 其实编译后看内部，就知道是编译成 Object.defineProperty(Employee.prototype, "fullName", ... 来实现的存取器