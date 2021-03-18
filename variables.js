//string
//string is the collection of characters
//we can represent the string in 3 ways ""(double quotes), ''(single quotes) and ``(backtick)
//backtick operator introduced in "ES6"
//backtick operator used to define the "multi line strings"
var sub = "ReactJS With TypeScript";
var wish = "Welcome to " + sub;
console.log(wish); //Welcome to ReactJS With TypeScript
//Note : above syntax valid only in ``(backtick)
var tbl_name = "employees";
var sal = 50000;
var sql_query = "select * from " + tbl_name + " where e_sal>" + sal;
console.log(sql_query); //select * from employees where e_sal>50000
var login_tbl = "login_details";
var u_name = "ashokit";
var u_pwd = "ashokit123";
var login_query = "select * from " + login_tbl + " where uname='" + u_name + "' and upwd='" + u_pwd + "'";
console.log(login_query); //select * from login_details where uname='ashokit' and upwd='ashokit123'
//bigint
//ES11  (ES2020)
//greter than 2^53 - 1
//we will suffix the bigint number with "n"
//var large_number = BigInt(123456778);
//undefined
//variable declared but value not assigned called as undefined
var my_var;
console.log(my_var); //undefined
//null
//to represent no value present in variable, we will use null datatype
var x = null;
console.log(x); //null
//number
//1) decimal
//2) double
//3) hexadecimal
//4) octal
//5) binary 
// hexadecimal number prefix with "0x"
// octal number prefix with "0o"
// binary number prefox with "0b"
var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimalNum = 0x123ABC;
var octalNum = 83;
var binaryNum = 10;
console.log(decimalNum, doubleNum, hexadecimalNum, octalNum, binaryNum);
;
//boolean datatype
//true , false
var flag = true;
console.log(flag);
//any
//"any" datatype representing "global" datatype
//any datatype used to represent "all datatypes"
//Ex. string , number, boolean, Array,.....
var my_data = "Hello";
console.log(my_data);
//union datatype
var var_one;
var_one = "Hello";
var_one = 100;
console.log(var_one); //100
//Array
//number Array
var num_arr1 = [10, 20, 30, 40, 50];
var num_arr2 = [100, 200, 300, 400, 500];
//iterate
//ES6
//forEach(),  for...of(),     for...in()
num_arr1.forEach(function (element, index) {
    console.log(element, num_arr2[index]);
});
//string array
var str_arr1 = ["Angular", "ReactJS", "VueJS"];
var str_arr2 = ["Oracle", "MySQL", "MongoDB"];
//Iterate
//forEach()   //ES6
str_arr1.forEach(function (element, index) {
    console.log(element, str_arr2[index]);
});
