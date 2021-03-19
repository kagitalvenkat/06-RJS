//Functions
//Particular business logic called as function.
//Functions are used to reuse the business logic
//we can declare functions by using "function" keyword.
//Types of functions
//1) Named Functions
//2) Anonymous Functions / Arrow Functions / NameLess Functions / Lamda Functions /CallBack Functions
//3) Rest Parameters in Functions
//4) Default Parameters in Functions
//5) Optional Parameters in Functions
//6) Generator Functions
//7) IIFE (Immidiate Invokable Functional Expressions)
//8) Constructor Functions

//Named Functions
//The function with user defined name called as Named Function.
/*
    Syntax
    ======
   function functionname(arg1:datatype, arg2:datatype,arg3:datatype,......argn:datatype):returntype{
        //business logic
   };
   functionname(param1,param2,param3,.....paramn);
*/

/*
    function fun_one():string{
        return "Hello";
    };

    fun_one    //function definition
    console.log( fun_one() );
*/


/*
    function fun_one():any{
        return fun_two;
    };

    function fun_two():any{
        return "welcome";
    };

    console.log( fun_one()() );    //welcome
*/


function fun_one(arg1:any,arg2:any,arg3:any):string{
    return `${arg1} <==> ${arg2} <==> ${arg3}`;
};
console.log( fun_one("Angular11","NodeJS","MongoDB") );
console.log( fun_one("ReactJS","NodeJS","CassandraDB") );
console.log( fun_one("VueJS","NodeJS","MySQL") );















































