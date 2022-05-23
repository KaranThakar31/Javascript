/*
if(condition){
}else{
}
*/


/*
Ternary operator:
condition ? if condition pass : if condition fail
*/

var a = 10;
let b = a > 10 ? "number greater than 10" : "num less than 10"
console.log(b);



//function 

//es5
function nameOFFunction(parameter){
    return output 
}
// add(1,2)
// 3
// add(1,2,3)
// 3                   //-- here, in condition we have given two parameter and,, in application parameters are three but it will only two parameters 
// if less parameters then output, NaN

//es6
let sum = (a,b) => { return a+b }
sum(3,4)
7
sum(8,9)
17

function plus(...data){
    let output =0;
    for(key of data){
        output += key 
    }
    return output;
}

/* 
if ... used in function definition, >> rest
if ... used in function calling, >> spread
*/


let input = [10, 20, 20];
console.log(plus(...input));
