var el = document.getElementById('form');
console.log(el);
var Visitor = /** @class */ (function () {
    function Visitor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Visitor;
}());
function greeter(visitor) {
    return "Hello, " + visitor.firstName + " " + visitor.lastName;
}
var visitor = new Visitor("Dana", "R.", "Sevcik");
// document.body.textContent = greeter(visitor);
