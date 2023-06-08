// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    type: "customer",
  };
}

// The error in the code is due to the fact that the function makeCustomer is supposed to return an object of type T, which extends User. 
// However, it is returning an object of exactly type User, and not necessarily T.
// It might be possible that T contains more properties than User, but the function makeCustomer is not considering these extra properties while creating the new object.
// when it returns an object of the exact type User, it is not necessarily returning an object of the type T, which is what its function promises to do

// The simplest fix to this problem would be to use the spread operator to copy all properties from u into the new object



// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number): string | number {
  if (typeof a !== typeof b) {
    throw new Error("Parameters must be both strings or both numbers.");
  }
  
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}

// Requirement is to accept either two strings or two numbers at the same time, 
// and to throw an error if parameters are one string and one number.
// The fix is to add a type check for a and b at the beginning of the function







