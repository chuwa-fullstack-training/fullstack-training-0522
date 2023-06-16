// 1. why there would be error in the following code? and how to fix it?
type User1 = {
  id: number;
  type: string;
};

function makeCustomer<T extends User1>(u: T): T {
  return {
    id: u.id,
    type: 'customer',
  } as T;
}
//there is duplicate type name User so I change it to User1
//explicitly annotate the return type of the function to ensure compatibility

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number): string | number {
  if (typeof a === 'string' && typeof b === 'string') {
    return `${a} : ${b}`;
  } else if (typeof a !== typeof b) {
    throw new Error('wrong parameter types');
  } else {
    return (a as number) + (b as number);
  }
}
