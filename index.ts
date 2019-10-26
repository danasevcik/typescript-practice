let el = document.getElementById('form');
console.log(el)

class Visitor {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Visitor {
    firstName: string;
    lastName: string;
}

function greeter(visitor: Visitor) {
    return "Hello, " + visitor.firstName + " " + visitor.lastName;
}

let visitor = new Visitor("Dana", "R.", "Sevcik");

document.body.textContent = greeter(visitor);
