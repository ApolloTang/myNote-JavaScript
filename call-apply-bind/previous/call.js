var _ = require('underscore');

function return_a_function(callbackFunction) {
    return function() { 
           return callbackFunction.call(null, _.toArray(arguments) ); 
        // work if you use:
        // return callbackFunction.call(null, arguments ); 
		// but arguments is not a true array object
    };
}

var takesArgumentList 
	= return_a_function( function(A){
         console.log( A[0], A[1], A[2], A[3]);
      } );

takesArgumentList( '1','2','3' );  //a: 1  b: 2  c: 3  d: undefined


