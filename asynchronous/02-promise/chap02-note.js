
Where does promise come from?
=============================

    Promise is created from a defered.

What kinds of functions return promises?
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

    1. resolve   - success
    2. reject    - errors has occurs
    3. progress  -

    We’ll sometimes informally say a deferred or a promise has fired
    By this we mean that the deferred was rejected or resolved, but
    that we don’t care which.

done()
------

    done() is use to arrage for a callback to be called if the deferred
    is resolved:

        promise.done(function(result){
            console.log('the promise was resolved with', result);
        });

    The argument of callback will have the deffered to be resolved.

    done can be called many times on the same promise:

        no sure which sytax is valid:

            promise.done(callback_1);
            promise.done(callback_2);
            promise.done(callback_3);

        or

            promise.done(callback_1).done(callback_2).done(callback_3);

    Each callback will be added to the list of functions to be execed
    when the promise is resolved.

    done() will ignore returns from callback, so there is no point
    to returning a value from callback. If you want to keep the return
    value from callback, use then().


fail()
======

    similar to done() but for reject


always()
========

    callback will always called no matter the original deferred
    is resolved or reject.

        promise.always(function(value){
            // The deferred fired with value, either via its resolve
            // or reject method.
                console.log('The promise fired with value', value);
        });

    Note in the above, within the callback you cannot tell whether
    arguments "value" comes from the deferred being resolved or rejected.

progress()
==========

    Report periodically on the progress of the asynchronous activity
