// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  };
}
/**
 * Function 'makeCustomer()' should return an object with type 'T'.
 * Type 'T' extends 'User'.
 * But in the code, the function only returns object which only guarantees to satisfy 'User' interface, not more specific 'T'
 * 
 * This code can be fixed with spread operator and assertion like below:
 */
function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,                        // Guarentee all properties in 'T'
    type: "customer"
  } as T;                        // Assertion
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}` as string;
  } else if(typeof a === "number" && typeof b === "number") {
    return a + b as number;
  } else {
      throw new Error('Parameters are one string and one number')
  }
}