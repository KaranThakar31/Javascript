a = 10
var b = 20;
console.log(add(a,b))

function add(a,b){
    return a+b 
}

// Here, for var, all the declaration happens first, 
// then assignment 

// this behavior is known as hoisting... of javascript 

// this behavior is not same for let, const but only for var 



// Inheritance, prototype::

function human(name, city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10;
}

var john = new human('john', 'delhi')
var pepper = new robot ('pepper')

human.prototype = new robot 



// in es6
class geo (){
    constructor(){
        let lat = 39.11;
        let longi = 29.11;
    }
}


class language extends geo {
    constructor (name, country){
        super()
        this.name = name;
        this.country = country;
    }

}





// Dynamic dropdown ::

