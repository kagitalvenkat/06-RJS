//class
//collection of "variables" and "functions" called as "class"
//we can create classes by using "class" keyword.
//we can create object to the "class" by using "new" keyword
//typescript supports the following modifiers.
//1) public
//2) private
//3) protected
//the recomended modifier for "variables" is "private"
//the recomended modifier for "functions" is "public"
//"this" is the keyword, used to refer the current class members
/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;

        constructor(){
            this.sub_one = "ReactJS";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        };

        public getSubOne():string{
            return this.sub_one;
        };

        public getSubTwo():string{
            return this.sub_two;
        };

        public getSubThree():string{
            return this.sub_three;
        };

    };

    let obj:class_one = new class_one();
    console.log( obj.getSubOne(),
                obj.getSubTwo(),
                obj.getSubThree() );
*/
/*
    class class_one{
        constructor(public arg1:string,
                    public arg2:string,
                    public arg3:string){}
    };
    let obj1:class_one = new class_one("Angular12","NodeJS","MongoDB");
    console.log( obj1.arg1, obj1.arg2, obj1.arg3 );

    let obj2:class_one = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( obj2.arg1, obj2.arg2, obj2.arg3 );

    let obj3:class_one = new class_one("VueJS","NodeJS","CassandraDB");
    console.log( obj3.arg1, obj3.arg2, obj3.arg3 );
*/
//inheritance
//getting the data from "parent" class to "child" class called as inheritance
//we will implement inheritance by using "extends" keyword.
//type of inheritances
//1) single level inheritance
//2) multi level inheritance
//3) multiple inheritance
//4) hirarichal inheritance
//5) hybrid inheritance
/*
    class Parent{
        var_one:string = "Hello_1";
        fun_one():string{
            return "Hello_2";
        };
    };

    class Child extends Parent{
        var_two:string = "Hello_3";
        fun_two():string{
            return "Hello_4";
        };
    };

    let obj:Child = new Child();     //duck typing
    console.log( obj.var_one,
                obj.fun_one(),
                obj.var_two,
                obj.fun_two() );
*/
/*
    class Parent{
        sub_one:string = "Hello_1";
    };

    class Child extends Parent{
        sub_two:string = "Hello_2";
    };

    class Subchild extends Child{
        sub_three:string = "Hello_3";
    };

    let obj:Subchild = new Subchild();
    console.log( obj.sub_one, obj.sub_two, obj.sub_three );
*/
/*
    class Parent1{}

    class Parent2{}

    class Child extends Parent1,Parent2{}

    //Note : multiple inheritance not supported by TypeScript
*/
/*
    class Parent{
        var_one:string = "Hello_1";
    };

    class Child1 extends Parent{
        var_two:string = "Hello_2";
    };

    class Child2 extends Parent{
        var_two:string = "Hello_3";
    };

    class Child3 extends Parent{
        var_two:string = "Hello_4";
    };

    class Child4 extends Parent{
        var_two:string = "Hello_5";
    };

    let obj1:Child1 = new Child1();
    console.log( obj1.var_one, obj1.var_two );


    let obj2:Child2 = new Child2();
    console.log( obj2.var_one, obj2.var_two );


    let obj3:Child3 = new Child3();
    console.log( obj3.var_one, obj3.var_two );


    let obj4:Child4 = new Child4();
    console.log( obj4.var_one, obj4.var_two );
*/
/*
    class Parent{}

    class Child1 extends Parent{}

    class Child2 extends Parent{}

    class Subchild extends Child1,Child2{}

    //Note : hybrid inheritance not supported by typescript
*/
//polymorphism
//behaves like many called as polymorphism
//1) function overriding     (dynamic polymorphism)
//2) function overloading    (static polymorphism)
/*
    //function overriding
    //overriding the parent class functionality with child class functionality called as function overriding

    class class_one{
        dbFun():string{
            return "oracle data soon...!";
        };
    };

    class class_two extends class_one{
        dbFun():string{
            return "mongodb data soon...!";
        }
    };

    let obj:class_two = new class_two();
    console.log( obj.dbFun() );   //mongodb data soon...!

    //Note : we can implement function overriding with the help of inheritance
*/
/*
    //function overloading
    //more than one function with same name, and same number of arguments but datatype is different
    //we can implement function overloading without inheritance

    class class_one{
        display(arg1:string,arg2:string):any;
        display(arg1:number,arg2:number):any;
        display(arg1:string,arg2:number):any;

        display(arg1:any,arg2:any):any{
            console.log( arg1, arg2 );
        }
    };

    let obj1:class_one = new class_one();
    obj1.display("Hello_1","Hello_2");
    obj1.display(100,200);
    obj1.display("Hello_1",200);
*/
/*
    //modifiers
    1) public
    2) private
    3) protected

    
*/
/*
        public
        ======
        1) public members we can access "anywhere" in application.

        2) public members by default available to "child" classes.

        3) we can access public members, by using class "objects".

        4) public modifier applicable to "variables", "functions", and "constructor"

        5) public modifier won't applicable to "classes"

*/
/*
    class class_one{
        public var_one:string;
        public constructor(){
            this.var_one = "hello_1";
        }
        public fun_one():string{
            return this.var_one;
        };
    };

    class class_two extends class_one{};

    let obj:class_two = new class_two();
    console.log( obj.var_one, obj.fun_one() );
*/
/*
    public class class_one{};
    //'public' modifier cannot appear on a module or namespace element.
*/
/*
    private modifier
    ================

        1) private members "won't" accessable to "child" classes.

        2) private members, we can't access by using class "objects".

        3) private modifier applicable to "variables", "functions" and "constructor".

        4) private modifier not applicable to "classes".

        5) we can create object to the private "constructor" classes.
*/
/*
    private class class_one{};
    //'private' modifier cannot appear on a module or namespace element.
*/
/*
    class class_one{
        private var_one:string = "hello_1";
    };
    new class_one().var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.ts(2341
*/
/*
    class class_one{
        private var_one:string="Hello_1";
    };
    class class_two extends class_one{

    };
    new class_two().var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.ts(2341)
*/
/*
    class class_one{
        private constructor(){}
    };
    new class_one(); //Property 'var_one' is private and only accessible within class 'class_one'.ts(2341)
*/
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "hello_1";
        this.var_two = this.var_one;
    }
    class_one.prototype.fun_one = function () {
        return "hello_2";
    };
    ;
    class_one.prototype.fun_two = function () {
        return this.fun_one();
    };
    ;
    return class_one;
}());
;
var obj = new class_one();
console.log(obj.var_two, obj.fun_two());
