


    $('#label').animate({ opacity: 0.25 }, 100, function(){
        // exec when animation is done.
    });

// the follwing is same as above

    var promise = $('#label').animate({ opacity: 0.25 }, 100).promise();
    promise.done(function(){/* exec when animation is done. */});

// Promises are the handles to the callbacks which to be exececuted
// when something is done

// Having handles with callbacks allowing you to manage your callbacks
// and coordiante them with events

    var promise1 = $('#label-1').animate({ opacity: 0.25 }, 100).promise();
    var promise2 = $('#label-2').animate({ opacity: 0.75 }, 200).promise();
    $.when(
          promise1
        , promise2
    ).done(function(){
            // run these codes when both animations are done.
    });

// more example

    $.when(
          $.ajax('http://google.com')
        , $.ajax('http://yahoo.com')
    ).then( function(googlePage, yahooPage){
            // Both URLs have been fetched.
    });


    $.when(
          $.ajax('http://google.com').then(function(){ return $('#label_1').animate({ opacity: 0.25 }, 100); })
        , $.ajax('http://yahoo.com').then(function(){ return $('#label_2').animate({ opacity: 0.75 }, 200); })
    ).then( function(){
        /* Both URLs have been fetched and both animations have completed.*/
    });


// .... hmmmm.... what is the different between "done" and "then"  ?

