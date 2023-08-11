const person = {
    name: "John",
    age: 30,
    sayHi: function() {
        return `Hello my name is ${this.name}`;
    }
};

console.log(person.sayHi()); // Output: "Hello my name is John"
