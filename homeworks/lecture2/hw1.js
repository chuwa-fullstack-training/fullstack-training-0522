//test cases 
var p = {
    id: 1,
    name: 'p',
    array: [1, 2, 3],
    function: function pfunc(){
        return 'p function';
    }
};
var o = {
    id: 2,
    name: 'o',
    array: [-1, -2, -3],
    function: function ofunc(){
        return 'o function';
    }
};
//var p = {};
//var o = {};

/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for (let properties in p){
        if (p.propertyIsEnumerable(properties) && !o[properties]){
            o[properties] = p[properties];
        }
    }
    return o;
}
//var obj1 = extend(o, p);//will modify o directly
//console.log("proper: " + Object.keys(obj1) + "\nval: " + Object.values(obj1));

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let unionObj = {};
    for(let properties in o){ 
        unionObj[properties] = o[properties];
    }
    for(let properties in p){ 
        if( !unionObj.hasOwnProperty(properties)){
            unionObj[properties] = p[properties];
        }
    }
    return unionObj;
}
var obj2 = union(o, p);
//console.log("proper: " + Object.keys(obj2) + "\nval: " + Object.values(obj2));

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    for(let properties in o){
        if(p[properties]){
            continue;
        } 
        else{
            delete o[properties];
        }
    }
    return o;
}
//var obj3 = restrict(o, p);//will modify o directly
//console.log("proper: " + Object.keys(obj3) + "\nval: " + Object.values(obj3));

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    let interObj = {};
    for(let properties in o){
        if(p[properties]){
            interObj[properties] = o[properties];
        } 
    }
    return interObj;
}
var obj4 = intersection(o, p);
//console.log("proper: " + Object.keys(obj4) + "\nval: " + Object.values(obj4));
