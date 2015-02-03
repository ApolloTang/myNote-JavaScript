var o = {
    myArray: [1, 2, 3, 4],
    fn1: function() {
        that = this
        console.log('1 ' +  (o === this) )
        function fn2(i) {
            console.log ('2 ' + (o===this));
            console.log ('3 ' + (o===that));
        }

        fn2();
    }// end fn1

};

o.fn1()
