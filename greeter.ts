// ran tsc
// adds additional typescript
// adds type to function argument
// changes var to let

// function greeter(person: string) {
//     return "Hello, " + person;
// }
//
// let user = "Jane User";
//
// document.body.textContent = greeter(user);

// interface syntax
// interface describes an object
// different from class in typescript - doesn't provide implementation or initialization

// interface Person {
//     firstName: string;
//     lastName: string;
// }
//
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
//
// let user = { firstName: "Jane", lastName: "User" };
//
// document.body.textContent = greeter(user);

// class syntax
// provides more functionality than interface - can use constructor functionality
// OO design
// using public keyword in constructor allows us to create properties with that name
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
