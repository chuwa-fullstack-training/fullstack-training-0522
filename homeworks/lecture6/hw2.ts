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
/* 
 * The error occurs because not all `Person` objects have the `role` property.
 * The `Person` type can either represent a `User` or an `Admin`.
 * So here we use type guards to make sure there is such property in the `Person` object.
 */
function logPerson(person: Person) {
  let additionalInformation: string;
  if ("role" in person) {  
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

