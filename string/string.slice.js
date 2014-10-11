console.log();
var str = ("0123456789").slice(0);
console.log('("0123456789").slice(0) gives: ');
console.log(str); //"0123456789"

console.log();
var str = ("0123456789").slice(1);
console.log('("0123456789").slice(1) gives: ');
console.log(str); //"123456789"

console.log();
var str = ("0123456789").slice(1,1);
console.log('("0123456789").slice(1,1) gives:');
console.log(str); //""

console.log();
var str = ("0123456789").slice(1,2);
console.log('("0123456789").slice(1,2) gives:');
console.log(str); //"1"

console.log();
var str = ("0123456789").slice(1,0);
console.log('("0123456789").slice(1,0) gives:');
console.log(str);  //""

console.log();
var str = ("0123456789").slice(0,10);
console.log('("0123456789").slice(0,10) gives:');
console.log(str); //"0123456789"

console.log();
var str = ("0123456789").slice(0,-1);
console.log('("0123456789").slice(0,-1) gives:');
console.log(str); //"012345678"

console.log();
var str = ("0123456789").slice(0,-2);
console.log('("0123456789").slice(0,-2) gives:');
console.log(str);  //"01234567"

console.log();
var str = ("0123456789").slice(-1);
console.log('("0123456789").slice(-1) gives:');
console.log(str); //"9"

console.log();
var str = ("0123456789").slice(-2);
console.log('("0123456789").slice(-2) gives:');
console.log(str);  //"89"

console.log();
var str = ("0123456789").slice(-10);
console.log('("0123456789").slice(-10) gives:');
console.log(str); //"0123456789"

console.log();
var str = ("0123456789").slice(-10, 10);
console.log('("0123456789").slice(-10, 10) gives:');
console.log(str); //"0123456789"

console.log();
var str = ("0123456789").slice(-10, -9);
console.log('("0123456789").slice(-10, -9) gives:');
console.log(str); //"0"

console.log();
var str = ("0123456789").slice();
console.log('("0123456789").slice() gives:');
console.log(str); //"0"