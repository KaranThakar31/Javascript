/// MAP - FILTER 

/* MAP 

it is used to iterate over the array
return same length as output 
used to apply logics (+,-,*,/)

*/

var a = [1,2,3,4,5,6,7,8,9,10];

a.map((data) => {return data*2});
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

a.map((data) => {return data > 5});
[false, false, false, false, false, true, true, true, true, true]


let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Raj",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    }
]

let idsArray = employees.map((data) => {return data.id});
console.log(idsArray);



/* FILTER 

used to filter out data
may / may not return same length {only return value with output true }

*/

var b = [-1,1,-2,2,0,];

b.map((data) => {return data*2});
[-2, 2, -4, 4, 0]    

b.filter((data) => {return data*2});
[-1, 1, -2, 2]          
// 0 is falsy value thats why no output - filter filtered out this one 
