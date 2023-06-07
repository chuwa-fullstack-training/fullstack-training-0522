// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {//cannot guarantee that T passed is an instance extends User
  return {
    id: u.id,
    type: "customer",
  } as T;//type assertion
}
let instance : User = {id: 1, type: "user"};
console.log(makeCustomer(instance));

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } 
  else if(typeof a === "number" && typeof b === "number"){
    return a + b;
  }
  else{
    throw new Error('cannot assign a and b with different types');
  } 
  
}

console.log(f(1,2));
console.log(f('1','2'));
console.log(f('1',2));