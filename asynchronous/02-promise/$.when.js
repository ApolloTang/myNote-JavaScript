        function callAfter(firstAction, secondAction, finalize){
            // Call finalize after the deferreds returned by firstAction and
            // secondAction have both finished. Pass finalize the result from both
            // deferreds.
            // NOTE: Don't write code like this! Use $.when instead.
            var finishedCount = 0, result1, result2;
            firstAction().done(
                    function(result){
                        finishedCount++;
                        result1 = result;
                        if (finishedCount === 2){ finalize(result1, result2); }
                    });
            secondAction().done(
                    function(result){
                        finishedCount++;
                        result2 = result;
                        if (finishedCount === 2){ finalize(result1, result2); }
                    });
        }


    There are some serious problems with the above!
    1. There is no error checking. What if firstAction or secondAction
       return a promise that is ultimately rejected?
    2. What if we want to call three promise-returning functions
       not two? More code duplication is needed and existing
       calls to callAfter will need to be found and changed.
    3. What happens if firstAction or secondAction doesn’t return a promise?
    4. The return value of finalize is lost.


    The jQuery $.when function (with some help from then) takes care
    of all these issues, allowing you to simply write:

        $.when( firstAction() , secondAction()).then(finalize);

    The call to $.when returns a new promise, as does the call to
    then. If either firstAc tion or secondAction rejects the promise
    it returns, the error value will be propagated to finalize.

    When it becomes available, it will be used to resolve the promise
    returned by then(). So if you need the result, you can simply write:

        $.when(firstAction(), secondAction()).then(finalize).done(function(){
            // arguments holds the result returned by the finalize function.
        });

    $.when also correctly handles the case in which the value returned
    by either (or both) of firstAction or secondAction is not a deferred.



