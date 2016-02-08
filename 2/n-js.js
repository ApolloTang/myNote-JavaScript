declaring variable
==================

    When a variable is declared withtout a value, it will be
    assigned the value of 'undefined'.

    'typeof' operates on an undeclared variable will return 'undefined'.

    With the acception of 'typeof', any operation perform on
    an undeclared variable will result with error.
        -- Thus, a variable must always be declared before use.

    Despite that it is safe to operate 'typeof' on undeclared variable,
    you cannot use 'typeof' to check pre-declaration of a variable.

    Here is why: If the operation of 'typeof' return 'undefined',
    it imply serveral situation about the variable in question:

        1, it is uninitialized.
        2, it is never declared.
        3, it has been assign with 'undefineed'.

    So the only way to check if a variable was pre-declared is using
    try-catch.


Javascript data type
====================

    ## Way to categorized data type:
    A. by reference-ability (premitive, or reference)
    B. by mutability
    C. by with or without method

    A. by reference-ability
    -----------------------
    1. 'primitive' types.
    2. 'reference' types.

        Five kind of primitive type:
        ````````````````````````````
        1, undefined
        2, null
        3, boolean
        4, string
        5, number

        Reference type:
        ``````````````
        1, Object (unoredered collection)
        2, Array (Ordered collection)
        3, function
        4, Constructor
        5, Date
        6, RegExp
        7, Error



Detecting Properties
====================

    Unreliable:

        if ( a && a.b) {
            // will not exec if a.b is falsy (eg. '', 0)
        }

    Reliable:

        if ( a && ('b' in a) ) {
            // do something with a.b
        }

        if ( a && (a.hasOwnProperty('b') ) {
            // do something with a.b
        }

      • 'in' operator and 'hasOwnProPerty()' search to see if the given
        key exist in the hash table.
      • 'hasOwnProperty()' search only its own hash table, but 'in'
        operator will also search up the prototype chain.
      • More performate because 'in' and 'hasOwnProperty()' will not evaluate
        the value of property.


Removing Properties
===================

    Setting property to a value of 'null' will not remove the property.
    You need to use the 'delete' operator to remove a property.

        var a={}; a.b = 'b';
        delete a.b;












