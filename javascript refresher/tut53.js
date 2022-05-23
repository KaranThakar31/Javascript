console.log('this is tut 53');


let name = "karan";
let name1 = "edureka";
let name2 = "science";
let name3 = "tech";
let greetingstext = "good morning";

console.log( name  + "is a piece of art");
console.log( name1  + "is a piece of art");
console.log( name2  + "is a piece of art");
console.log( name3  + "is a piece of art");

function greet(name, greetingstext){
    console.log("hello" + name + greetingstext);
    console.log(name + "is a piece of art");
}
greet(name1, greetingstext);
greet(name2, greetingstext);
greet(name3, greetingstext);
let returnval1 = greet(name, greetingstext);
console.log(returnval1);

function sum(a,b,c){
   let d = a + b + c;
    return d;
}
let returnval2 = sum(1,2,3);
console.log(returnval2);

function sort(a,b){
    if (a>b) {
        return a;
    } 
    else if (a=b) {
        return a;
    }
    else {
        return b;
    }
}

let order1 = (1,2);
let order2 = (30, 399);
let order3 = (9, 999);
let order4 = (9,9);

let returnvalo = sort(1,2);
console.log(returnvalo);

let returnvali = sort(order2);
console.log(returnvali);

let returnvalz = sort(order3);
console.log(returnvalz);

let returnvale = sort(order4);
console.log(returnvale);