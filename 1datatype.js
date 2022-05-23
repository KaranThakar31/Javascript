        var a= 78;     
        typeof(a)    /*var= are like container*/
        "number";
        var b="Karan";     /*data type = represented by nothing integer*/
        typeof(b)
        "string";
        console.log(a);    /*data type= string surrounded by double intervented comma */
        a = -a;
        console.log(a);

        //operators in java script 
        // 1. unary operators
        // ex. ( c=-c etc, here only 1 function included)

        // 2. binary operators
        // ex. ( here, two times function has to be done or included )

        c= 122 + 3;
        typeof(c)
        "number";
        console.log(c);


        // 3 ways to concat a string, 
        // + operator, but here space is present by default 
        // concat operator, here also same problem, but it is possible to put a space, ex. 
        a = "hi", b= "javascript", a.concat(" ", b)
        //'hi javascript'
        //this syntax though only useful when both variable are of same datatype
        ["hii", "javascript"].join(' ');
        //'hii javascript'
        ["hii", "javascript"].join('');
        //'hiijavascript'
        ["hii", "javascript"].join('/');
        //'hii/javascript'

        


        /*  really important by heart

        push = add element at last
        pop = remove element at last 
        unshift = add element at first position
        shift = remove element at first position

        */

        /*  

        String +string = string 
        String +number = string 
        number +string = string 
        number +number = number 

        though this is only applicable to + operator, - and other operator work perfectly when there is string bu tin number form 

        */


// boolean datatype behavior when added with string and number datatype

a=true;
b=true;
a+b
//2
c="or false"
a+c
//'trueor false'

