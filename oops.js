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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Parent = /** @class */ (function () {
    function Parent() {
        this.var_one = "Hello_1";
    }
    return Parent;
}());
;
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_2";
        return _this;
    }
    return Child1;
}(Parent));
;
var Child2 = /** @class */ (function (_super) {
    __extends(Child2, _super);
    function Child2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_3";
        return _this;
    }
    return Child2;
}(Parent));
;
var Child3 = /** @class */ (function (_super) {
    __extends(Child3, _super);
    function Child3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_4";
        return _this;
    }
    return Child3;
}(Parent));
;
var Child4 = /** @class */ (function (_super) {
    __extends(Child4, _super);
    function Child4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Hello_5";
        return _this;
    }
    return Child4;
}(Parent));
;
var obj1 = new Child1();
console.log(obj1.var_one, obj1.var_two);
var obj2 = new Child2();
console.log(obj2.var_one, obj2.var_two);
var obj3 = new Child3();
console.log(obj3.var_one, obj3.var_two);
var obj4 = new Child4();
console.log(obj4.var_one, obj4.var_two);
