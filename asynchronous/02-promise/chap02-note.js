
Where does promise come from?
=============================

    Promise is created from a defered.

What kind of function returns promises?
=========================================

    There are three ways you can receive a promise using jQuery:

        1. $.ajax method returns promise()

            var promise = $.ajax('http://google.com');
            promise.done(callback);

        2. jQuery animation method returns promise()

            var promise = $('#label').animate({ opacity: 0.25 }, 100).promise();
            promise.done(callback);

        3. Dom elements selected with jQuery returns promise()

            var $div = $('div').each(function(){ $(this).fadeOut(1000));});
            $div.promise().done(function(){
                // All <div> animations are finished.
            });


what can happened to your promiss?
==================================

    1. done()     // resolve : deferred has been resolved success
    2. fail()     // reject  : errors has occurs
    3. progress() // report periodically on the progress of the asynchronous activity
    4. always()   // deferred is resolved or reject.

    - These methods are chain after promise and used to arrange
      for a callback to be called if the deferred is resolved:

    - These methods be called many times on the same promise:

        no sure which sytax is valid:

            promise.done(callback_1);
            promise.done(callback_2);
            promise.done(callback_3);

        or

            promise.done(callback_1).done(callback_2).done(callback_3);

        Each callback will be added to the list of functions to be execed
        when the promise is resolved.

    - These methods ignore returns value from callback, so there is no point
      in returning a value within callback function. If you want to keep the return
      value from callback, use then().



    comment on always()

        callback passed into always() will always called no matter
        the original deferred is resolved or reject:

            promise.always(function(value){
                // The deferred fired with value, either via its resolve
                // or reject method.
                    console.log('The promise fired with value', value);
            });

        Note in the above, within the callback you cannot tell whether
        arguments "value" comes from the deferred being resolved or rejected.

        Always() is used when a deferred or a promise has *fired*.
        By "fired", we informmally meant that the deferred was
        rejected or resolved, but that we don’t know which and we don't
        care which.


then()
======

        promise.then(
            function(result){
                // The deferred was resolved with result. Double it and pass it on.
                return 2 * result;
            }
            , function(error){
                // The deferred was rejected with error. Log it and pass on a different
                // (null) error.
                console.log('Error received:', error);
                return null;
            }
            , function(value){
                // The deferred made progress. Convert it to a percentage string.
                return Math.round(value * 100.0) + '%';
        }
        );
