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

// the error is that the returned object is not necessarily of type T, only of type User
// we can fix by either making the return type of makeCustomer be User
// or we can fix by copying over everthing from u which is of type T:
// let cus = {...u}; cus.type = "customer"; return cus;

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("a and b are different types");
}
