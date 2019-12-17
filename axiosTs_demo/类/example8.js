// 以下是 存取器
// 也就是在类中可以 getter setter 啦
// 可以借助存取器访问私有变量
var passcode = 'secret';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode === 'secret') { // 计算操作符 & || | ^ 等号 左右两边只能是 'any', 'number', 'bigint' or an enum type
                this._fullName = newName;
            }
            else {
                console.log('Error: 密码不对');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
console.log(employee.fullName); // undefined
employee.fullName = 'Sadhu';
console.log(employee.fullName); // Sadhu
