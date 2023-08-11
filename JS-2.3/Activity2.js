let topping = "chicken";

switch(topping){
    case "meatballs" :
    case "sausage" :
        console.log(`${topping}, is an important ingredient`)
        break
    case "chicken":
    case "corn":
        console.log(`${topping}, this ingredient is fine`)
        break
    default:
        console.log(`${topping}, this is no a good ingredient`)
}