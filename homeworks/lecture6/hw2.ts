interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Aaron",
    age: 99,
    occupation: "TypeScript Developer",
  },
  {
    name: "Alex",
    age: 98,
    role: "System Administrator",
  },
];

// fix the error showing in the following code:
function logPerson(person: Person) {
  let additionalInformation: string;
  if ('role' in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// It should use TypeScript's type guards and use the in operator to check if a specific property exists in the object

/*
Using typeof in this case will not work as expected because typeof returns the data type of its operand, 
which can be "number", "string", "boolean", "object", "function", "undefined", "symbol", or "bigint". 
It doesn't provide information about a specific interface that the object might adhere to, or whether a particular property exists on the object.
*/