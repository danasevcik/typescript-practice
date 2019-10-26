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
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);
