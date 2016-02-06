/*
undefined is a data type and null is a special value of object type.
*/

/*  
Losely speaking undefined means a variable has been declared 
but has not yet been assigned a value
*/

console.log("- - - - - - - - [1] ");

var var1;
console.log(var1);        //shows undefined
console.log(typeof var1); //shows undefined

/* 
null is an assignment value of type object. 
It can be assigned to a variable as a representation of no value:
*/

console.log("- - - - - - - - [2]");
var var2 = null;
console.log(var2);         //shows null
console.log(typeof var2);  //shows object


/* more over */

console.log("- - - - - - - - [3]");
 
var a;
console.log(a == null);         // true
console.log(a == undefined);    // true
console.log(null == undefined); // true


console.log("- - - - - - - - [4]");

var a;
console.log(a === null);         // false
console.log(a === undefined);    // true
console.log(null === undefined); // false

console.log("- - - - - - - - [5] ");

/* 
As shown above, because (null == undefined) is always 
true you can replace the following: 
*/

var var3;
if ( var3 === undefined || var3 === null) {}

// … With this:

if ( var3 == null) {   }

