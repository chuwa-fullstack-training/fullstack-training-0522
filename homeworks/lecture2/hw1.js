/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
const o = {1:2, 3:4}
const p = {3:5, 4:6, 6:7}
function extend(o, p) {
    // implement your code here
    for (let k in p){
        o[k] = p[k]
    }
    return o;
}
extend(o,p)
/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    var q = {}
    for (let k in p){
        q[k] = p[k]
    }
    for (let k in o){
        q[k] = o[k]
    }
    return q;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for (let k in o){
        if (p[k]){
            continue;
        }else{
            delete o[k]
        }
    }
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    var q = {}
    for (let k in o){
        if (p[k]){
            q[k] = o[k];
        }
    }
    return q;
}