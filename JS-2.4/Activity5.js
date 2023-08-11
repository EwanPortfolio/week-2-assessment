for (let i = 0; i < 6; i++){
    let number= Math.floor(Math.random() * 30) + 1;
        console.log(number)
    if (number % 7 === 0){
        console.log("divided by 7");
    }   else {
        console.log("cant be divided by 7") 
    }
}