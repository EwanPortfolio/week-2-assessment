const coffeeShop = {
    branch: "lunch time",
    drinks: [           
        "coke", 2.50,
        "coffee", 3.00,
        "tea", 1.50,
    ],
    Meals: [
        "soup", 3.00,
        "pie", 2.50,
        "toast", 4.00
    ],

    drinksOrdered(drinks) {
       for (let i = 0; i < this.drinks.length; i += 2){
            if (drinks === this.drinks[i]){
                console.log(`you ordered a ${drinks} and it will cost ${this.drinks[i + 1]}`)
                return;
            }
       } 

    console.log(`${drinks} is not available.`);
    },
    foodOrdered(Meals) {
        for (let j = 0; j < this.Meals.length; j += 2){
            if (Meals === this.Meals[j]){
            console.log(`you ordered a ${Meals} and it will cost ${this.Meals[j + 1]}`)
            return;
            }    
    }

    console.log(`${Meals} is not available.`);
}


}

coffeeShop.drinksOrdered("tea");
coffeeShop.foodOrdered("pie");
