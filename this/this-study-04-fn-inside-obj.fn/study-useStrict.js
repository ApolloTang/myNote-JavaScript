'use strict';
var o = {
    fn1: function() {
        var that = this;
        console.log('1 ' +  (o === this) );
        function fn2() {
            console.log ('2 ' + (o===this));
            console.log ('3 ' + (o===that));
        }

        fn2();
    }// end fn1
};

o.fn1();
