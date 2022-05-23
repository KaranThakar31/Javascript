/*
for
while 
do while 
for of 
for in {object}
*/


// nested for loop


// var b = ['eula', 'raidon', 'yae', 'ganyu', 'shnehe', 'rosaria', 'lumine', ['saber', 'Medusa - rider', 'Minamoto no Raikou', 'Kiara Mooncancer', 'Rin', 'Caster', 'Ishtar', 'Ereskigal']];
for (i=0; i<b.length; i++){
    if(Array.isArray(b[i])){
        for(j=0; j<b[i].length; j++){
            console.log(b[i][j]);
        }
    }
    else{
        console.log(b[i]);
    }
}


// while
var i=10;
while(i<5){
    console.log(i);
    i++
}


// do while 

// var i = 10;
do {
    console.log(i);
    i++
}
while(i<5)

//for of 
var b = ['eula', 'raidon', 'yae', 'ganyu', 'shnehe', 'rosaria', 'lumine', ['saber', 'Medusa - rider', 'Minamoto no Raikou', 'Kiara Mooncancer', 'Rin', 'Caster', 'Ishtar', 'Ereskigal']];

for (waifus of b){
    if(Array.isArray(waifus)){
        for (fgowaifus of waifus){
            console.log(fgowaifus);
        }
    }
    else{
        console.log(waifus);
    }
}



