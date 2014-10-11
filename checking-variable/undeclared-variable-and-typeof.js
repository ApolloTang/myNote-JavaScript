/*

typeof {variable identifier}

if the result is:

undefined   : the variable is uninitialized or it has not been declared
object      : the variable is either an object or null, but not include function


Even though uninitialized variables are assigned a value of undefined, it is 
better to always initialize variables. That way, when typeof returns 
"undefined", you’ll know that it’s because a given variable hasn’t been 
declared rather than was simply not initialized.

There are only two operators can operate on an undeclared variable:
"typeof" and "delete".  Everything else will throw eception.



*/

var exist;           // uninitialized variable
// var notExist;    //  undeclared varibale

console.log( typeof exist);      // undefined 
console.log( typeof notExist);   // undefined


console.log(' - - - - - - - - 1 ');

// however, this will throw errow !!!! 

try {
	typeof exist.foo;
} catch(error) {
	console.log('error while executing: typeof exist.foo');
	console.log('error is: ', error);
	// [TypeError: Cannot read property 'foo' of undefined]
	// exist is not a object, and thus cannot have property
}

console.log(' - - - - - - - - 2 ');

// This will work !!!!

var existObj = {};
console.log ('typeof existObj.foo: ', typeof existObj.foo);  // undefined

console.log(' - - - - - - - - 3 ');






