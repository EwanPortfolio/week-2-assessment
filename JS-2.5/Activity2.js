let orderCount = 0;

const takeOrder = (topping, cheeseType) => {
    console.log(`Pizza with ${topping} and ${cheeseType}`);
    orderCount ++
}

takeOrder("mushrooms", "chedder")