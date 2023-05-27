/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

// test
const o = {1:2, 3:4};
const p = {3:9, 4:5, 6:7};
// extend(o, p);
// console.log("🚀 ~ file: hw1.js:18 ~ o:", o);

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    const q = new Object();

    for (prop in o) {
        q[prop] = o[prop];
    }
    
    for (prop in p) {
        if (q[prop] === undefined) {
            q[prop] = p[prop];
        }
    }

    return q;
}

// test
const q = union(o, p);
console.log("🚀 ~ file: hw1.js:40 ~ union ~ q:", q);

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (prop in o) {
        if (p[prop] === undefined) {
            delete o[prop];
        }
    }
    return o;
}

// test
restrict(o, p);
console.log("🚀 ~ file: hw1.js:59 ~ o:", o)

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    const q = new Object();

    for (prop in o) {
        if (p[prop] !== undefined) {
            q[prop] = o[prop];
        }
    }
    return q;
}

// test
const t = intersection(o, p);
console.log("🚀 ~ file: hw1.js:82 ~ t:", t)
