let factorial =(n:number):number=>{    // pass one parameter 
    if (n ===0){                       // if statement when n ==0 then retrun 1
        return 1;
    }
    return n * factorial(n-1);   //  return 5 * 4 * 3 * 2 * 1  
}
console.log(factorial(5));  // invoke function pass argument (5)  = O/P 120

