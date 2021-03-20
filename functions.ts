//Function
//Particular business logic called as Function
//Functions are used to reuse the business logic
//we have following types of functions
//1) Named Functions
//2) Anonymous Functions / Arrow Functions / Fat Arrow Functions / Lamda Functions / CallBack Functions / NameLess Functions
//3) Rest Parameters in Functions
//4) Optional Parameters in Functions
//5) Default Parameters in Functions
//6) Generators
//7) IIFE (Immidiate Invokable Functional Expressions)
//8) Constructor Functions

/*  
    Named Functions
    ===============
        - The function with the name(custom name) called as Named Function.
        Syntax
        ======
        //function definition

        function functionname(arg1:datatype,
                              arg2:datatype,
                              arg3:datatype,
                               ----
                               ----
                               ----
                              argn:datatype):returntype{
            //business logic
        };


        //call the function

        functionname(param1,param2,param3,.....paramn);
*/

/*
    function fun_one():string{
        return "welcome";
    };
    console.log( fun_one );     //def
    console.log( fun_one() );    //welcome
*/


/*
    function fun_one():any{
        return fun_two;
    };

    function fun_two():any{
        return {"key":"hello"};
    };

    console.log( fun_one()().key );
*/


/*
    function fun_one(arg1:string,arg2:string,arg3:string,arg4:string):string{
        return `${arg1}......${arg2}<==>${arg3}<==>${arg4}`;
    };

    console.log( fun_one("MEAN Stack","Angular12","NodeJS","MongoDB") );
    console.log( fun_one("MERN Stack","ReactJS","NodeJS","MongoDB") );
    console.log( fun_one("MEVN Stack","VueJS","NodeJS","MongoDB") );
*/

//Anonymous Functions
//The function "without" name called as "Anonymous" Function
//Anonymous functions also called as "Arrow" Functions   (ES6)
//Arrow Functions, we will represent with "=>" symbol
//Arrow Functions are "secured" functions compared to "Named" Functions
//Arrow Functions behaves like "callback" Functions

/*
    Syntax.
    ======
    var/let/const variablename:datatype = (arg1:datatype,
                                           arg2:datatype,
                                           arg3:datatype,
                                           -----
                                           -----
                                           -----
                                           argn:datatype):returntype =>{
                //business logic
    };

    variablename(param1,param2,param3,......paramn);

*/

/*
    let fun_one:any = ():string=>{
        return "Welcome to AshokIT";
    };

    console.log( fun_one );   //def
    console.log( fun_one() );    //Welcome to AshokIT
*/




/*
    let fun_one:any = (arg1:any,
                    arg2:any,
                    arg3:any):any =>{
        console.log( arg1(), arg2() , arg3() );
    };

    fun_one( ():any=>{ return "ReactJS" }, 
            ():any=>{ return "NodeJS" }, 
            ():any=>{ return "MongoDB" } );
    //ReactJS NodeJS MongoDB
*/


/*
    let outer = ():any=>{
        return ():any=>{
            return "Hello";
        }
    };
    console.log( outer()() );      //Hello
*/


//Rest Parameters in Functions
//we can store more than one value in a single "argument", by using "rest" aparameters
//we will recognize rest parameter by using "..." symbol
//rest parameter introduced in "ES6"
//each function accepting only "one" rest parameter
//rest parameter position should be "last" in arguments


/*
    function fun_one(...arg1:any):void{
        console.log( arg1 );
    };
    fun_one("Hello_1","Hello_2","Hello_3");    //[ 'Hello_1', 'Hello_2', 'Hello_3' ]
    fun_one();                                 //[]
    fun_one(undefined);                        //[ undefined ]
    fun_one(undefined,null);                   //[ undefined, null ]
*/


/*
    function fun_one(...arg1:any,...arg2):void{}
    //A rest parameter must be last in a parameter list.
*/


/*
    function fun_one(...arg1:any,arg2:any):void{}
    //A rest parameter must be last in a parameter list.
*/



//optional parameters in functions
//while calling the functions, we will make "few" parameters are "optional"
//optional parameters introduced in "ES6"
//we will represent optional parameters by using "?"

/*
    function fun_one(arg1?:any,
                    arg2?:any,
                    arg3?:any):void{
        console.log( arg1, arg2, arg3 );
    };
    fun_one();   //undefined undefined undefined
    fun_one("Hello_1");   //Hello_1 undefined undefined
    fun_one(undefined,"Hello_2",undefined); //undefined Hello_2 undefined
    fun_one(null,null,null);    //null null null
*/


function fun_one(arg1:any,
                 arg2?:any,
                 ...arg3:any):void{
    console.log( arg1, arg2, arg3 );
};
//fun_one();                        //Expected at least 1 arguments, but got 0.
fun_one("Hello_1");                 //Hello_1 undefined []
fun_one(undefined);                 //undefined undefined []
fun_one(undefined,undefined,undefined); //undefined undefined [ undefined ]
fun_one(null,null,null);            //null null [ null ]























































































































































































