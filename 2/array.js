Will MUTATE the original array:
    splice()


Will NOT mutate the original array:
    concat()
    slice()


Copy array
==========

var myArray_orig = [1,2,3];
var myArray_copy = Array.prototype.slice.call( myArray_orig );
var myArray_copy = [].slice.call( myArray_orig );


[].slice();
===========

    Synopsis

        [ [0], [1], ... [-1], [0] ].slice( index_start, index_stop )
            => [ index_start, ...,index_stop )

      • @[!] Note that returned array does not include the element(index_stop).
      • index_stop is optional.

    Example
             // [ 0] [+1] [+2] [+3] [+4]
             // [-4] [-3] [-2] [-1] [ 0]
        var a = [ 1,   2,   3,   4,   5 ];

        a.slice( 0, 3 );  // => [1, 2, 3]   not include element[3]
        a.slice( 3 );     // => [4, 5]
        a.slice( 1,-1 );  // => [2, 3]      not include element[-1]
        a.slice( -3,-2 ); // => [3]         not include element[-2]



