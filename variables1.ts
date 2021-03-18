//let keyword
//let keyword introduced in ES6
//let keyword used to declare the variables


/*
    console.log( data );     //Error     //undefined
    var data;
    data = 100;

    //accessing variable before it's declaration and initilization called as variable hoisting

    //var keyword raises the variable hoisting
    //let keyword overcomes the variable hoisting
*/


/*
    var data:number = 100;
    var data:number = 200;
    console.log( data );    //200   

    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/



/*
for(var i:number = 0;i<5;i++){


};
console.log( i );    //5

//var keyword breaks the scope rule
//let keyword obeys the scope rule
*/



var data:number = 100;


if(true){
    var data:number = 200;
    
};

console.log( data );   //200

//global polluting issue raised because of var keyword
//we can overcome global polluting issue by using let keyword













































