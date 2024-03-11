function outerFucntion(x) {
    let tripledValue = x * 3; // store in global variable 4 * 3
    function innerFunction() {
        tripledValue += 3; // global variable tripledValue + 3 increment
        return tripledValue; // return variable
    }
    return innerFunction; // return innerFunction
}
const calculate = outerFucntion(4); // invoke outerFunction (4) assigned in var 
console.log(calculate()); // Output: 15   (4 * 3 + 3)  
export {};
