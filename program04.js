let sumAll = (...nums) => {
    let sum = 0; // which means it can accept any number of arguments;
    for (let num of nums) { //  loop use each number of an array 
        sum += num; // calculate to sum
    }
    return sum; //return sum
};
let result = sumAll(1, 2, 3); //  call sumAll function pass arguments
console.log(result); // Output: 6
let result1 = sumAll(10, 20, 30, 40, 50);
console.log(result1); // Output: 150
export {};
