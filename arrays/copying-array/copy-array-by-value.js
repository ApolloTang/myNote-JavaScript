//
// Ref:
// http://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript

// Assigning a array referenced by a variable to another variable only
// duplicate the reference value hold by the original varibale,
// it does not duplicate the value referenced to the original array:

    var array1 = [0, 1];
    var array2 = array1;
    array2.push(2); // both array1 and array2 reference to the same array obj

    console.log(["array1: ",array1].join(" ")); // 0,1,2
    console.log(["array2: ",array2].join(" ")); // 0,1,2
    console.log(["array1===array2: ",(array2===array1)].join(" "));  // true


// If you want to duplicate the array value reference by a variable use
// Array.prototype.slice() or Array.prototype.concat().

// -----------------------------
// using slice():

    var arrayA = [0, 1];
    var arrayB = arrayA.slice(0);   // slice recreate a new array object
    arrayB.push(2); // both arrayA and arrayA reference to different array obj

    console.log(["arrayA: ",arrayA].join(" ")); // 0,1
    console.log(["arrayB: ",arrayB].join(" ")); // 0,1,2
    console.log(["arrayA===arrayB: ",(arrayA===arrayB)].join(" "));  // false


// note that Specifiying the 0 index is unecessary. Simply:
//
//         var arrayB = arrayA.slice(0);
//
// is sufficient

// -----------------------------
// using concat:

    var arrayX = [0,1];
    var arrayY = Array.prototype.concat(arrayX);
    arrayY.push(2);


    console.log(["arrayX: ",arrayX].join(" ")); // 0,1
    console.log(["arrayY: ",arrayY].join(" ")); // 0,1,2
    console.log(["arrayX===arrayY: ",(arrayX===arrayY)].join(" "));  // false

/*

If there's a chance arrayX is undefined, you can return an empty array as follows:

    var arrayY = [].concat(arrayX || []);

Or

    var arrayY = (arrayX || []).concat();

*/


/*

Javascript provides several different types of arrays (at least 5 types).

    var type1 = ['a', 'b'];                                 // Array of Strings
    var type2 = [1, 2];                                     // Array of Numbers
    var type3 = [['a'], ['b']];                             // Array of Arrays
    var type4 = [{a: 'a'} , {b: 'b'}];                      // Array of Object-Literals
    var type5 = [{a: function () {}}, {b: function () {}}]; // Array of Objects

1. For strings, numbers, etc (premitive, type1 and type2), slice
   copies strings and numbers into the new array. Changes to the string or number
   in one array does not affect the other array.

2. For object references (type3, type4, type5), slice copies
   object references into the new array. Both the original and new
   array refer to the same object. If a referenced object changes
   the changes are visible to both the new and original arrays.
*/
