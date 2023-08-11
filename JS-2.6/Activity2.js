let pet = {
    name: "dsa",
    typeOfPet: "Lizard",
    colour: "brown",
    Age: 8,
    eat(){
       return `Your ${this.typeOfPet} called ${this.name} is eating.` 
    }
}

console.log(pet.eat());