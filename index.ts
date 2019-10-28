let el = document.getElementById('form');
console.log(el)

// define class visitor with constructor function
// attributes of first name, middle initial and last name
class Visitor {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// define interface visitor
// attributes of first name and last name 
interface Visitor {
    firstName: string;
    lastName: string;
}

function greeter(visitor: Visitor) {
    return "Hello, " + visitor.firstName + " " + visitor.lastName;
}

let visitor = new Visitor("Dana", "R.", "Sevcik");

document.body.textContent = greeter(visitor);
