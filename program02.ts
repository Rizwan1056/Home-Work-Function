
function greet(name:string, greeting :string= "Hello"):string{ // function has 2 parameter one passed default value "hello" & other passing argument 
    return  greeting +" "+ name;                        // return value Hello Sir Ameen Alam & Hi Sir Zia Khan
}
console.log(greet("Sir Ameen Alam"));                  // call function pass single argument
console.log(greet("Sir Zia Khan","Hi"));               // call function pass double arguments
