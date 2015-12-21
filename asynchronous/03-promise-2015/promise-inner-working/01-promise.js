
const myCb = () => { console.log('hello') };

const doSomeThing = (cb) => { cb(); };
doSomeThing(myCb);

const doItLikePromise = () => { return {then: (cb)=>cb()} };
doItLikePromise().then(myCb);
// In the above, doItLikePromise return a function. This returned
// function is called "then" which takes a callback and execute
// it.



// - - - - - - - - - -
// Without setTimeout resolve() will be executed before
// then() had the change to assign myCb to callback, and thus
// the execution failed. To rectify this our Promise need to
// have state.
class Promise { constructor (fn) {
    let callback = null;
    this.then = (cb) => { callback = cb };
    const resolve = (value) => { callback(value);};
    fn(resolve);
}};

const p = new Promise((resolve) => {
    console.log('wait for 2sec');
    setTimeout(()=>{ resolve('done, resolved, completed') }, 2000)
    // resolve('done, resolved, completed');
});

const myCb = (v)=>{console.log(v)};
p.then(myCb);

// - - - - - - - - - - - - - - - - - - - -
// Refactor to take advantage of class method
// note that this.resolve is call inside fn which does not
// has 'this', thus we have to bind resolve with 'this'

class Promise {
    constructor (fn) {
        this.callback = null;
        fn(this.resolve.bind(this)); // <--- need to bind this
    }
    then(cb) { this.callback = cb }
    resolve(value){ this.callback(value); };
};

const p = new Promise((resolve) => {
    console.log('wait for 2sec');
    setTimeout(()=>{ resolve('done, resolved, completed') }, 2000)
    // resolve('done, resolved, completed');
});

const myCb = (v)=>{console.log(v)};
p.then(myCb);

// - - - - - - - - - - - - - - - - - - - -




