var a = [];     // array
var b = {};     // objects

var animeName1 = 'Noragami';
var genre = 'Action. comedy, fiction etc';
var episodes = '24';

var animeName2 = 'Bleach';
var genre = 'Action, Shounen, etc';
var epsiodes = '720+';


var Anime ={
    name : 'Noragami',
    genre : 'Action. comedy, fiction etc',
    episodes : '24'
}

Anime['episodes']
'24'
Anime.episodes
'24'


for (key in Anime){
    console.log(key);
}
// name
// genre
// episodes

for (key in Anime){
    console.log(Anime[key]);    // here Anime.key -- not working 
}
//  Noragami
//  Action. comedy, fiction etc';
//  24





/* JSON   -- javascript object notation
    way to represent data
*/

let Anime = [
    {
        name : 'Noragami',
        genre : 'Action. comedy, fiction etc',
        episodes : '24'  
    },
    {
        name : 'Naruto',
        genre : 'Action. comedy, fiction etc',
        episodes : '720+'
    }
]


// OBJECT FUNCTION 

let calc = {
    sum : function(a,b){return a+b},
    sub : function (a,b){return a-b}
}

calc.sum(10,10);
20
calc.sub(10,10);
0

let dbquery ={
    find : function(table){return `select from ${table}`},
    insert : function (table, data){return `insert into ${tabele}, name, city : ${name}, ${city}`}
}


function language(name, country){
    this.name = name;
    this.country = country;
    this.greet = () => {return `Say hi to ${name} from ${country}`};
}

let hindi = new language('karan', 'india');

hindi
// language {name: 'karan', country: 'india', greet: ƒ};
hindi.greet();
// 'say hi to karan from india';

