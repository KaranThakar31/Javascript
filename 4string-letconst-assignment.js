var anime = "Attack on Titan";
var studio = "maPPA";
var type = "action, thrill, drama, mystery etc";
var rating = 9;


a = `the ${anime} from ${studio} is of ${type} genre with best ratings of ${rating} out of 10`;
console.log(a);

/*

var -- can be redeclare and reassign
let -- can be redeclare but can't not be assign
const -- cannot redeclare or reassign 

*/



/*

= assign
== compare data
=== compare data and datatype

*/

var p = 10;
var q = "10";
p==q;
true
p===q;
false



/*

truthy > any number except 0 weather +ve or -ve, any string, true
falsey > false, 0, null, undefined

*/

var a = 0;
!a;
true
var a ="hii";
!a;
false;