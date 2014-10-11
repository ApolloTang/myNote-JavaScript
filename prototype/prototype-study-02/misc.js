console.log('indexOf' in []);    // true, b/c indexOf is accessible
console.log([].hasOwnProperty('indexOf');  // false because indexOf in located in Array.prototpye