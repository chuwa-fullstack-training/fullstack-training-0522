/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    let check = false;
    for(let i = 0; i < p.length; i++){
        for(let pos = 0; pos < o.length; pos++){
            if(o[pos].name === p[i].name){
                o[pos] = p[i];
                check = true;
                break;
            }
        }
        if(check == false){
            o.push(p[i]);
        }
        check = false;
    }
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    var nums = new Array();
    for (let pos = 0; pos < o.length; pos++){
        nums.push(o[pos]);
        let i = 0;
        while(i < p.length){
            if(o[pos].name === p[i].name){
                p.splice(i, 1);
            }else{
                i++;
            }
        }
    }
    for(let i = 0; i < p.length; i++){
        nums.push(p[i]);
    }
    return nums;
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    let pos = 0;
    while(pos < o.length){
        for(let i = 0; i < p.length; i++){
            if(o[pos].name === p[i].name){
                o.splice(pos, 1);
            }else{
                pos++;
            }
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
    var nums = new Array();
    for (let pos = 0; pos < o.length; pos++){
        for(let i = 0; i < p.length; i++){
            if(o[pos].name === p[i].name){
                nums.push(o[pos]);
            }
        }
    }
    return nums;
}