// Typescript is a language built on top of javascript that allows for type-checking
// It introduces the strongly typed functionality that we're familiar with from Java to javascript
// this is good, because it can stop us from making errors...
let str : string = "this is a string variable..";
console.log(str);
// Testing truthy/falsy in andreas question...
if(str){
    console.log("str exists");
}else{
    console.log("doesnt exist");
}
// Typescript does not run
// Typescript, like java, needs to be compiled (transpiled) before it's run
// Javascript does not need to be compiled - we call this an 'interepreted' language
// Typescript is transpiled into javascript
// the tsc command conducts this transpiling


// Even though JS is loosely typed, it still has 'types'
/*
boolean
null
undefined
number
string
symbol
object
*/
/*
on top of all the provided JS types,
we also have a few additions in TS
any - a variable can be anything, like in javascript
enum
tuple - a fixed size array that contains certain expected values for a certain object
void - a variable can not be any type (think of return type void in javascript)
never - a variable can not be a certain type
*/
let multiVar : string | number | boolean = "I can be anything!"
console.log(multiVar); 

for(let i = 0; i < 10; i++){
    let block : any = "I am a block scoped variable!";
}
/*
we can convert TS to any version of JS - default is es5, but es5 is missing important features like let/const variables,
as well as some functionality for more advanced TS features
*/