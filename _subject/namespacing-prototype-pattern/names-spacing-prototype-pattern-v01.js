CPT = {}
CPT.ViewModels = CPT.ViewModels || {};

CPT.ViewModels = (function () {


    // Allocation class
    var Allocation = function (poolName, allocAmount, code) {
        this._poolName = (poolName || '');
        this._allocAmount = allocAmount || 0;
        this._code = code || '';
    }


    // Investment class    
    var Investment = function (clientName) {
        this._description = clientName + "'s investment";
        this._allocations = [];
        this._amt = 0;
        this._amtCtr = null;
        this._amtAllocCtr = null;
    }
    Investment.prototype.amount = function (amt) {
        if (amt) {
            this._amt = amt;
        }
        return this._amt
    }
    Investment.prototype.amountCtr = function (amtCtr) {
        if (amtCtr) {
            this._amtCtr = amtCtr;
        }
        return this._amtCtr
    }
    Investment.prototype.amountAllocCtr = function (amtAllocCtr) {
        if (amtAllocCtr) {
            this._amtAllocCtr = amtAllocCtr;
        }
        return this._amtAllocCtr
    }
    Investment.prototype.add = function (alloc) {
        this._allocations.push(alloc);
    }
    Investment.prototype.get = function (i) {
        return this._allocations[i]
    }
    Investment.prototype.remove = function (i) {
        return this._allocations.splice(i, 1);
    }
    Investment.prototype.clear = function () {
        this._allocations.length = 0;
    }
    Investment.prototype.count = function () {
        return this._allocations.length;
    }


    // Clients Collection class
    var Clients = function () {
        this._Dictionary = {};
    }
    Clients.prototype.add = function (clientName) {
        this._Dictionary[clientName] = new Investment(clientName);
        return this._Dictionary[clientName];
    }
    Clients.prototype.get = function (clientName) {
        return this._Dictionary[clientName];
    }
    Clients.prototype.remove = function (clientName) {
        delete clientDictionary[clientName];
    }

    return {
        Allocation: Allocation,
        Investment: Investment,
        Clients: Clients
    }

})();




// Usage
// instantiate client collections
var clients = new CPT.ViewModels.Clients();

// add two clients
var apollo = clients.add("Apollo");
var hamid = clients.add("Hamid");



// return clients
console.log('clients.get("Apollo")', clients.get("Apollo"));
console.log('clients.get("Hamid")', clients.get("Hamid"));

// set amount to invest
apollo.amount(150000);
hamid.amount(500000);

// get amount
console.log("apollo invested: ", apollo.amount());
console.log("hamid invested: ", hamid.amount());


// add allocation
apollo.add(new CPT.ViewModels.Allocation("ABCPool", 100000, "ABCCode"));
apollo.add(new CPT.ViewModels.Allocation("XYZPool", 25000, "xyzCode"));
apollo.add(new CPT.ViewModels.Allocation("PQRPool", 25000, "pqrCode"));
hamid.add(new CPT.ViewModels.Allocation("PQRPool", 250000, "pqrCode"));
hamid.add(new CPT.ViewModels.Allocation("XYZPool", 250000, "xyzCode"));


// number of allocation
console.log("apollo.count()", apollo.count());
console.log("hamid.count()", hamid.count());

// remove allocation
console.log("one allocation removed from apollo's investment", apollo.remove(2));
console.log("apollo.count()", apollo.count());

// clear allocation 
console.log("apollo's allocation has been removed", apollo.clear());
console.log("apollo.count()", apollo.count());


// client object: 
console.log("apollo: ", apollo);
console.log("hamid: ", hamid);


// clients collection object:
console.log("clients: ", clients);