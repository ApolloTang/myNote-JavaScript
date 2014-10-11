/* Undeclared variable

 Nicholas Zakas p32
 
 With the exception of two operations (i.e., typeof and delete) 
 all operations performed on an undeclared variable causes error.

*/

console.log(' - - - - - - - - - - - - - - ');
 
var exist;  // <-- declare but uninitialized

console.log( 'console.log(exist): '  , exist )               // undefined
console.log( 'exist == undefined:'   , exist == undefined )  // true
console.log( 'exist === undefined: ' , exist === undefined ) // true
console.log( 'exist == null: '       , exist == null )       // true
console.log( 'exist === null: '      , exist === null )      // false
console.log( 'typeof exist: '        , typeof exist )        // undefined
console.log( 'delete exist: '        , delete exist )        // false

console.log(' - - - - - - - - - - - - - - ');


//var not_exist  //<-- this variable has been commented out so it does not exist

//console.log( 'console.log(not_exist): '   , not_exist )                 // error
//console.log( 'not_exist == undefined:'    , not_exist == undefined )    // error
//console.log( 'not_exist === undefined: '  , not_exist === undefined )   // error
//console.log( 'not_exist == null:'         , not_exist == null )         // error
//console.log( 'not_exist === null: '       , not_exist === null )        // error
  console.log( 'typeof not_exist: '         , typeof not_exist )          // undefined
  console.log( 'delete not_exist: '         , delete not_exist )          // true
  
  
/*
Since most operation on undeclared variable will crush your program, there
are time you need to check if a variable is declared prior to an operation. 
But there are no way to varify if a variavle is declared because to do this,
you need to test (namely operate) the variable in question with a test operator. 
And the only two operators you can use to perform test without crushing your test
is delete and typeof. These two operator are no help - Testing with "delete", 
after the test the variable is no longer exist. Testing with "typeof" give 
you "undefied", which mean the variable is either not declared or not initialized. 

The only way to test the variable's existence if to use try-catch block.

*/   

console.log(' - - - - - - - - - - - - - - ');


 // Here is my attempt to check for existence of a variable:
    
    try{
        console.log('[test 1]', not_exist)
    } catch (error) {
        console.log('[test 1] '+ error)      // ReferenceError
    }
 
    try{
        console.log('[test 2]', exist)
        } catch (error) {
        console.log('[test 2] '+ error)      // Undefined
    }
 
    // begin test 
	var existence = true;  // assume existence
    try{
		(exist);
        } catch (error) {
		if (/ReferenceError/.test('ReferenceError')) existence = false;      
    }
	console.log("exist's existence: " + existence);
	
    try{
		(not_exist);
        } catch (error) {
		if (/ReferenceError/.test('ReferenceError')) existence = false;      
    }
	console.log("non_exist's existence: " + existence);

console.log(' - - - - - - - - - - - - - - ');
	
// Case where above doesn't work !! 
	
	try{
		(exist.foo);
        } catch (error) {
		console.log('exist.foo, Error is: ', error);
			// [TypeError: Cannot read property 'foo' of undefined]
    }
	
	try{
		(notExist.foo);
        } catch (error) {
		console.log('notExist.foo, Error is: ', error);
			// [ReferenceError: notExist is not defined]
    }
