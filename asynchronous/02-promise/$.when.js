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
