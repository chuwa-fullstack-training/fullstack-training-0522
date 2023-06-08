// 1. why there would be error in the following code? and how to fix it?
// type User = {
//   id: number;
//   type: string;
// };

// function makeCustomer<T extends User>(u: T): User {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }


//Type '{ id: number; type: string; }' is not assignable to type 'T'.
//'{ id: number; type: string; }' is assignable to the constraint of type 'T', but 'T' could be instantiated with 
//a different sub




// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function ff(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return a+b;
  } else if(typeof a === "number" && typeof b === "number"){
    return a+b;
  } else{

    
  }
}
