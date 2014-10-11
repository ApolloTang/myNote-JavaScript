function return_a_function(callbackFunction) {
    return function(array) { 
        return callbackFunction.apply(null, array); 
    };
}

var takesArrayArgument 
	= return_a_function( function(a,b,c,d){  
         // each array's element is map into individual argument
         console.log( " a:", a, " b:", b, " c:", c, " d:", d);
      } );

takesArrayArgument( ['1','2','3'] );  //a: 1  b: 2  c: 3  d: undefined