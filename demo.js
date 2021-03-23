function *fun_one(){
    yield "Hello_1";
    yield "Hello_2";
    yield "Hello_3";
    yield "Hello_4";
    yield "Hello_5";
};

let cursor = fun_one();
console.log( cursor.next() );
console.log( cursor.next() );
console.log( cursor.next() );
console.log( cursor.next() );
console.log( cursor.next() );
console.log( cursor.next() );