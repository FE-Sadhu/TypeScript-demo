// demo 1
function greeter(person) {
    return 'Hello ' + person;
}
var user = 'Sadhu';
console.log(greeter(user));
function greeter2(person) {
    return 'Hello ' + person.first + ' ' + person.last;
}
var user2 = {
    first: 'sadhu',
    last: 'wu'
};
console.log(greeter2(user2));
// demo 3
var User = /** @class */ (function () {
    function User(first, last) {
        this.first = first;
        this.last = last;
        this.full = this.first + ' ' + this.last;
    }
    return User;
}());
function greeter3(person) {
    return 'Hello ' + person.first + ' ' + person.last;
}
var user3 = new User('sadhu', 'wu');
console.log(greeter3(user3));
