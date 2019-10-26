// ran tsc
// adds additional typescript
// adds type to function argument
// changes var to let

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
