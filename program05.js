function multiplier(num) {
    return function (value) {
        return value * num;
    };
}
const triple = multiplier(3);
console.log(triple(5)); // Output: 15 (3 * 5)
export {};
//  num parameter and returns another function.
// The returned function takes a value parameter and multiplies it by the num  to the outer function.
// call Multiplier(3), it returns a function that will triple any value passed to it.
// Finally these returned functions (triple) to multiply values as we needed.
