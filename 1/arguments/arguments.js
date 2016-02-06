function f1() {
	console.log(arguments);            // { '0': 1, '1': 2, '2': 3, '3': 4 } 
	console.log(typeof arguments);     // object (arguments is an array like object)
	console.log(arguments.length);     // 4  (length of actual parameter)
	console.log(arguments.callee);     // [Function: f1]
	console.log(arguments.toString()); // [object Arguments]
		// convert array like object to array:
	var _arguments = Array.prototype.slice.call(arguments,0);  // this is an javascript array
	console.log(typeof _arguments);       // object  typeof Array return object
	console.log(_arguments);              // [1,2,3,4]
	console.log( _arguments.toString() ); //  1,2,3,4
	console.log( typeof _arguments.toString() ); //  string
	debugger;
}
f1(1,2,3,4);