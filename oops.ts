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












































































