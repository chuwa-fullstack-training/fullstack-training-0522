// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  } as T;
}

//There is an error because the compiler doesn't know if the return object is the same
//type as the input u, so just make them the same type T.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if(typeof a === "number" && typeof b === "number"){
    return a + b;
  }else {
    throw new Error("a and b should be the same type!")
  }

}
//The function accepts two type, and if a and b are not the same type, they can't use "+".
//So just make sure they are the same type.
