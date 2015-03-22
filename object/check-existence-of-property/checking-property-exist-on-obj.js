
// Ref: NZ-principles-Of-OO-js.pdf p33

// check if the property howManyEggs exist on object grocery


    var grocery = { howManyEggs: 0 };

    // Unreliable
    if (grocery.howManyEggs) {
        console.log('property "howManyEggs" exits');
    } else {
        console.log('property "howManyEggs" does not exist (obviously a false nagative)');
    }

    console.log('- - - - - - - - - - - -');

    // Reliable
    if ('howManyEggs' in grocery) {
        console.log('property "howManyEggs" exits');
    } else {
        console.log('property "howManyEggs" does not exist (obviously a false nagative) ');
    }

    console.log('- - - - - - - - - - - -');

    // note that the "in" operator will also check properties
    // on prototype.

    // if you want to check existence of a property
    // on an object, you can use hasOwnProperty() method

    var myArray = [];
    myArray.id = '123';

    if (myArray.hasOwnProperty('splice') ) {
        console.log('"splice" exists on myArray');
    } else if ('splice' in myArray) {
        console.log('"splice" is accessible on prototype of myArray ');
    }


    console.log('- - - - - - - - - - - -');

    if (myArray.hasOwnProperty('id') ) {
        console.log('"id" exists on myArray');
    } else if ('id' in myArray) {
        console.log('"id" is accessible from proprototype of myArray');
    }


