/*      for random number between two number
Math.floor(Math.random((min - max))) + min;
*/

Math.PI;
3.141592653589793
Math.PI.toFixed();    // will show only that number of digit 
3.14 
parseFloat(Math.PI.toFixed(2));
3.14

Math.round(1.3)
1
Math.round(1.5)
2
Math.round(1.7)
2





/*      
Array = collection of heterogenous/ homogenous datatype
*/

var a = ["karan", 200280119126, true];
typeof(a)
'object'
a.push('L.D.C.E');
a
['karan', 200280119126, true, 'L.D.C.E']
a.pop(200000);;
'L.D.C.E'
a;
['karan', 200280119126, true]
a.unshift('otaku');
4
a;
['otaku', 'karan', 200280119126, true]
a.shift();
'otaku'
a;
['karan', 200280119126, true];


/*

push >> add at last
pop >> remove at last
unshift >> add at first
shift >> remove at first

*/


diffcity = ['Dubai', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki'];
['Dubai', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']
diffcity.slice(1);
['Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']
diffcity.slice(2,5);
['London', 'Venice', 'Amsterdam']
// varname.slice(start,end)


var character = ["eula", "raidon", "yae", "ganyu", "shnehe", "rosaria", "lumine"];

character.splice(2,1)   // at index 2, remove 1 value
['yae']
character.splice(2,2)
['ganyu', 'shnehe']        // at index 2, remove 2 value
character
['eula', 'raidon', 'rosaria', 'lumine']
character.splice(2,0, "yae", "ganyu", "shnehe"); //at index 2, remove 0, add 3 given values
character
['eula', 'raidon', 'yae', 'ganyu', 'shnehe', 'rosaria', 'lumine']


character.indexOf('ganyu');
3
character.indexOf('lisa');
-1


// to check if a object is a array or not

var a = "genshin impact";
var b = ['eula', 'raidon', 'yae', 'ganyu', 'shnehe', 'rosaria', 'lumine'];
Array.isArray(a)
false
Array.isArray(b)
true

var a = [1,2,3]
var b = [4,5,6]
a+b
[1,2,34,5,6];
a.concat(b);
[1,2,3,4,5,6];


var a = "https://github.com/developerTech/edu_intern_feb_22/blob/master/javascript/15array.js";
a.split('/');
b = ['https:', '', 'github.com', 'developerTech', 'edu_intern_feb_22', 'blob', 'master', 'javascript', '15array.js']
c = b.toString();
'https:,,github.com,developerTech,edu_intern_feb_22,blob,master,javascript,15array.js';
d = c.replace(/,/g,"/");
'https://github.com/developerTech/edu_intern_feb_22/blob/master/javascript/15array.js';


 var myArray = ["dubai", ["red", "blue","green", [1,2,3]], "ahmedabad", "delhi", "surat", "london", "rome"];
 myArray[0];
 'dubai'
 myArray[1]
 ["red", "blue","green", [1,2,3]]
 myArray[1][2]
 'green'
 myArray[1][3]
 [1, 2, 3]
 myArray[1][3][2]
 3

 