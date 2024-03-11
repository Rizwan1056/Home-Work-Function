const applyCallback = function (numbers, callback) {
    const result = [];
    for (const num of numbers) {
        result.push(callback(num));
    }
    return result;
};
const numArray = [1, 2, 3]; // array value [1,2,3]
const doubledArray = applyCallback(numArray, (num) => num * 2); // invoke function 1 *2 , 2*2  , 3*2
console.log(doubledArray); // Output: [2, 4, 6]
export {};
