//alert in in-browser Javascript
let a = alert("Wrong Answer");       //it does not return
console.log(a);

let name = prompt("What is your name ?", "Guest");
console.log(name);


//CONFIRM IN Javascript
let deletepost = confirm("Do you really want to procced?");
if(deletepost){
    //code to delete the post 
    console.log("You Post has been deleted");
}
else{
    //code to cancel deletion of the post 
    console.log("You have withdrawn from this action");
}


//website for 18+

let age = prompt("Please state your age.");
if(age>17){ 
    console.log("Welcome to our Club");
}
else{
    console.log("Sorry for the inconvenience, but You are not allowed in our club");
}