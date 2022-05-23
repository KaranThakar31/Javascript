map is used to iterate over array 
it always return same length of output as input array 
used to apply logic (addition, subs, multiply, division)


var a = [2,3,4,5,6,7,8,9,0]
a.map((data) => {return data*2})
var a = [4,6,8,10,12,14,16,18,0]


function inside a function, it is called callback function.



filter working= 
    use to filter or data
    may/maynot return same length output as input
    it only return value whose condition and output is true 

var a = [2,3,4,5,6,7,8,9,0]
a.filter((data) => {return data>5})
a = [6,7,8,9]

a.map((data) => {return data>5})
a = [false, false, false, false, true, true, true, true, false] 




interview question ==

truthy value == every value except 0, {-1, -2, 1,2, 'hello'}  {-ve, +ve, string}
falsey value == 0, false, null, undetermined

var a = [-1, -2, 0, 1, 2]
a.map((data) => {return data*2})
a = [-2, -4, 0, 2, 4]

a.filter((data) => {return data*2})
a= [-1,-2, 1, 2, 4]   //here, filter checked if, values can be multiplied to data or not, only falsey value can not be multiply, their answer is 1, other all true that's why same value 


movie ={
    name : 'jab we met',
    rating : '4.8',
    ind : 'bollywood',
}
movie.type='drama'              
delete movie.ind = 'bollywood'      // update, add, delete the value of objects

movie ={
    name : 'jab we met',
    rating : '4.8',
    type : 'drama'
}




JSON == javascirpt object notation 
//way to represent data 

let movie = [
    {
        name : 'jab we met',
        ratings : 4.3,
        industry : 'bollywood'
    }
    {
        name : 'iron man',
        ratings : 4.6,
        industry : 'hollywood'
    }
]

in json file:::

[
    {
        "name" : "jab we met",
        "ratings" : 4.3,
        "industry" : "bollywood"            //double comma in key value and key name, two curly bracket seperated by comma, whole data in []
    },
    {
        "name" : 'iron man',
        "ratings" : 4.6,
        "industry" : 'hollywood' 
    }
]

structure of .json files: 
[
    {
        "" : "",
        "" : ""
    },
    {
        "" : "",
        "" : ""
    }
]

object as a function (also method is defined):

let calc ={
    sum = function(a,b){return a+b},
    sub = (a,b) => {return a-b}
}

calc.sum(1,3)
4
cal(4,1)
3

normally in industries programers follows this.
for reusability.


find qyuer and insert quer:

let dbquery = {
    find:function(table){return `Select * from ${table}`},
    insert:function(table,data){return `insert into ${table} name, city ${data.anme}, ${data.city}`}
}





/*
this.object  topic :
*/
var fname = 'michel';
var lname = 'peter';



let sayhi = {
    fname : 'zoe',
    lname : 'lisa',
    greet : function(){ return `say Hi to ${this.fname} ${this.lname}` },   // it will look for values in local scopes..  it will print = say hie to zoe lisa
    greet : function (){ return `say hi to ${fname} ${lname}`}          // it will look for values in global scopes.. it will print = say hi to michel peter
}

console.log(sayhi.greet());



// function method

function language(name, country){
    this.name = name;
    this.country = country;
    this.greet = () => { return `${name}, welcome to ${country}`}
}



//here just 'new' keyword is added and it is called constructor notations

//constructor notation of object: 

let gujarati = new language('gujarati', 'gujarat');
gujarati.greet()
// print = gujarati, welcome to gujarat



// object function 

class langauge {
    constructor (name, country){            // all the declaration will happens inside constructor 
        this.name = name;
        this.country = country;
    }
    greet =()=> {return `say hi to ${this.name} from ${this.country}`}
}

let france = new language('french', 'france')
france.greet()

// print ==  'say hi to french from france'
























