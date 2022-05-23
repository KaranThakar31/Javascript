// global and local scope 

// var a =10;
// function add(){
//     var b =20;
//     return a+b;            // curly bracket creates scopes, and restrict scopes which will make a local scope and during return function only global scope is seen, so we can't get answer for b.
// }           //function makes a clousers, here real reason for not retuning b var at console is var not clouser

// console.log(">>>add>>>", add())
// console.log(">>>a>>>", a)
// console.log(">>>b>>>", b)

var a = 10;

for(i=0; i<5; i++){
    let b = 20;
    console.log(a+b+i);          // in for loop, if else by default doesn't make a clousers and doesn't restrict the scope, but if you want to restrict the scope then use let ....
}

console.log(">>>a>>>", a)
console.log(">>>b>>>", b)