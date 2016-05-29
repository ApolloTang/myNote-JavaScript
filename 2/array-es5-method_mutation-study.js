immutability of ES5 array method
================================

    forEach()
    ---------

        // Synopsis
        //
        //    • Element of premitive value are copied and passed into the iterator
        //    • If element is non-premitive value, reference
        //      address are copied and passed into the iterator
        //    • forEach() always return 'undefined'

        var a = [1,2, {a:'a'}];
        console.log('before: ', JSON.stringify(a)); // [1,2,{"a":"a"}]

        var iterator = function(el, k, _a) {
            if ( typeof el === 'number' ) {
               el = el*100; // will NOT multete shallow premitive element in a
            } else {
                el.a = 'z'; // will MULTATE deep object
            }
        };
        var returnValue = a.forEach(iterator);

        console.log('after: ', JSON.stringify(a)); // [1,2,{"a":"z"}]
        console.log('returnValue: ', returnValue); // undefined

        console.log(' - - - - - - - - - - - - - - - - - - - -')

        // Synopsis
        //
        //   • The array operated on is passed into the interator's 3rd argument,
        //     ∴ changed make on any element from 3rd arguement
        //     will multate the array being operated.
        //

        var a = [1,2, {a:'a'}];
        console.log('before: ', JSON.stringify(a)); // [1,2,{"a":"a"}]

        var iterator = function(el, k, _a) {
            if ( typeof el === 'number' ) {
                _a[k] = el*100;
            } else {
                _a[k].a = 'z';
            }
        };
        a.forEach(iterator);

        console.log('after: ', JSON.stringify(a)); // [1,2,{"a":"z"}]



    map()
    -----

        var a = [1,2,3];
        var b = a.map(function(v,k,_a) {
            v = v*1000;   // will not mutate a;
            return 'new';
        });
        console.log(a); // [1,2,3]
        console.log(b); // ['new', 'new', 'new']

        var a = [1,2,3];
        var b = a.map(function(v,k,_a) {
            _a[k] = _a[k]*1000;   // will mutate a;
            return 'new';
        });
        console.log(a); // [1000,2000,3000]
        console.log(b); // ['new', 'new', 'new']


    filter()
    --------

        // Synopsis
        //
        //    • Element of premitive value are copied and passed into the predicate
        //    • If element is non-premitive value, reference
        //      address are copied and passed into the predicate

        var a = [1,2, {a:'a'}];
        var predicate = function( el,k, _a) {
            if ( typeof el === 'number' ) {
                el = el*100; // will NOT multete shallow premitive element in a
            } else {
                el.a = 'z';  // will MULTATE deep object
            }
            return true;   // none of the element are filtered when predicate return 'true'
        };

        var a_copy = a.filter(predicate);
        console.log(JSON.stringify(a));      // [1,2,{"a":"z"}]
        console.log(JSON.stringify(a_copy)); // [1,2,{"a":"z"}]


    slice()
    -------

        // Synopsis
        // with no argument, a.slice() returns shallow copy of the array it operate on

        var a = [1,2, {a:'a'}];
        var a_copy = a.slice();  // Shallow copy of a

        // purposely mutate elements in a_copy
        a_copy.forEach( function(el, k, _a_copy) {
            if ( typeof el === 'number' ) {
                _a_copy[k] = _a_copy[k]*100;
            } else {
                _a_copy[2].a = 'z';
            }
        });

        console.log(JSON.stringify(a));       // [1,2,{"a":"z"}]     > a[1,2] is preserved, a[3] is mutated, ∵ it is a shallow copy
        console.log(JSON.stringify(a_copy));  // [100,200,{"a":"z"}]

        // long syntax
        // ```````````
        var a = [1,2, {a:'a'}];
        var a_copy = Array.prototype.slice.call(a);
        console.log(JSON.stringify(a_copy));         //[1,2,{"a":"a"}]




