
var o = {
    fn1: function() {
        var that = this;
        console.log('1 ' +  (o === this) ); // true
        function fn2() {
            console.log ('2 ' + (o===this)); // false
            console.log ('3 ' + (o===that)); // true
        }

        fn2();
    }// end fn1
};

o.fn1();
