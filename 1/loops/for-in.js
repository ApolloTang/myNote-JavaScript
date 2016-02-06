/*
for/in loop only enumerate enumerable properties
    - all properties and methods definded by you
        (alhought in ECMA 5 you can twig user defined proproty
         to make it non-enumerable)
    - all user-defined inherited properties

for/in loop cannot enumerate non-enumeratable properties:
    - all core/build-in/native javascript  objects
 */


var o = {x:1, y:2, z:3};
var a = [], i = 0;
for ( a[i++] in o ) {/* empty */};
    //  ^----- [1]
console.log(a); // ["x", "y", "z"]

// note that [1] in can be an arbitrary expression
// as long as it evaluates to something suitable
// for the left side of an assignment
// This expression is evaluated each time through the loop.


// - - - - - - - - - - - - - - - - - - -

// Javascirpt array are simply a specialized kind of object
// where the indexes are object properties that can be
// enumeratable with for/in loop


for (i in a) {
    console.log(i) // 0 1 2
}
