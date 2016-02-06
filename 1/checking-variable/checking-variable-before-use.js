
/*

Before using a variable from an unkown library, you must chack to be sure it exist.

You only option to perform this check is using 'typeof' operator. 'typeof' is the only safe operator, all other operator crushes your application.

If 'typeof' operator return sting'undefined' it means, the varibale is unsafe because:

	a. it is either undeclared or 
	b. it has been declared but has not initialized with a value.
	
Under this situation, you have to give up using this variable and find other alternative.  	

However, if 'typeof' operator return a string anything other than 'undefied', namely one of:

	'boolean', 'string', 'number', 'object', or 'function'
	
then the variable is already declared and initialized, you can safely perform operation on it. 

*/

console.log('- - - - case undeclared unknown');

if (typeof unknown != 'undefined') {
	console.log( 'safe to use' );
} else {
	console.log( "not safe to use, we don't know if has been declared");
}
// not safe to use, we don't know if has been declared

console.log('- - - - case declared unknown');

var exist_unknown;
if (typeof exist_unknown != 'undefined') {
	console.log( 'safe to use' );
} else {
	console.log( "not safe to use, we don't know if has been declared");
}
// not safe to use, we don't know if has been declared


console.log('- - - - case initialized unknown');

var initialied_unknown = null;
if (typeof initialied_unknown != 'undefined') {
	console.log( 'safe to use, the variable is of type: ' + typeof initialied_unknown );
	console.log( 'unknown: ' + initialied_unknown );
} else {
	console.log( "not safe to use, we don't know if has been declared");
}
//safe to use, the variable is of type: object
//unknown: null





		
/*	- - - - - - - above is good, below is draft  - - - - - - - - -- - */	

/*
		
		2. it does not have the value of 'null' 
	3. it does not have the value of 'undefine'.


So go ahead use your variable, however, in some case you want to 

Now you have to check if it is   
	

Checking for undefine include the checking for existence, so you only need to check for 'null' and undefine.

*/

//if ( var1 !== null  && var1 !== 'undefined' ) { /* go ahead you can use var1 */ }
