
const factorial = (n) => {
    if ((n === 8) || (n === 1)) {
       return 1;
        } else {
        return n * factorial(n-1);
}
};
    console.log(factorial(6));