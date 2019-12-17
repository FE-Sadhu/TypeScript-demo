// 类中存取器的实现
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var employee = new Employee();
console.log(employee); // { employee: undefined }, 记住，类中声明了实例属性，等同于在构造函数中 this.fullName = name 没传 name 值了
console.log(employee.fullName); // undefined
console.log(employee.fullName = 'Bob Smith'); // 'Bob Smith'
employee.full = 'sss';
console.log(employee); // Employee { fullName: 'Bob Smith', full: 'sss' } 虽然报错，但也会定义成功
// 以上想说明的是，共有属性可以在外部访问，但是类创造出的实例，是不允许定义除类声明共有属性之外的任何属性。 
