var A1 = [1,2,3,4,5,6];
var A1_sliced = Array.prototype.slice.call(A1, 2); 

console.log('A1_sliced: ', A1_sliced );  //  [ 3, 4, 5, 6 ]

var A2 = A1.concat( Array.prototype.slice.call(A1_sliced) );

console.log('A2 = A1+A1_sliced: ', A2);