// 类与接口
// 有时候不同的类之间可能会有一些共同的特性，我们就可以把这些特性提取成接口。
// 比如防盗门和汽车都有报警功能
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('xxxxx');
    };
    SecurityDoor.prototype.shunk = function () {
    };
    return SecurityDoor;
}(Door));
// class Car implements Alarm { // Error： Property 'shunk' is missing in type 'Car' but required in type 'Alarm'.
//   alert() {
//     console.log('xxxx')
//   }
// }
// 接口描述了类的公共部分，它不会检测类的私有部分。
var Test = /** @class */ (function () {
    function Test() {
        function alert() {
            console.log('不描述私有部分');
        }
        function shunk() {
            console.log('不描述私有部分');
        }
    }
    Test.prototype.alert = function () {
        console.log('接口只描述了这里的公共部分');
    };
    Test.prototype.shunk = function () {
        console.log('只描述公共部分');
    };
    return Test;
}());
new Test().alert();
