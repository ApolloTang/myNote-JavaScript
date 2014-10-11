//_=require("underscore");

var exist;
//var notExist;

typeof exist;
//typeof exist.foo;


var existObj = {}
if (existObj) {
	console.log(typeof existObj);
	console.log(type existObj.unDeclaredProp);
}	

try {
 (existObj);
 } catch (error) {
 console.log(error)
 }

 




