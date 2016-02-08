immutability of ES6 array method
================================

    forEach()
    ---------
        var a = [1,2,3];
        var b = a.forEach(function(v,k,_a) {
            v = v*1000;   // will not mutate a;
        });
        console.log(a); // [1,2,3]
        console.log(b); // undefined

        var a = [1,2,3];
        var b = a.forEach(function(v,k,_a) {
            _a[k] = _a[k]*1000;   // will mutate a;
        });
        console.log(a); // [1000,2000,3000]
        console.log(b); // undefined



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
        var a = [1,2,3];
        var b = a.filter(function(v,k,_a) {
            v = v*1000;   // will not mutate a;
            return false;
        });
        console.log(a); // [1,2,3]
        console.log(b); // []


        var a = [1,2,3];
        var b = a.filter(function(v,k,_a) {
            _a[k] = _a[k]*1000; // will mutate a;
            return false;
        });
        console.log(a); // [1000,2000,3000]
        console.log(b); // []





