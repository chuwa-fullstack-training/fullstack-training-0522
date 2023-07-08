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
  if (person.role) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

/* The error in the code is occurring because the Person type is a union type of User and Admin, and not all objects of the Person type have both the role and occupation properties.

To fix the error, you can use type assertions to narrow down the type of the person parameter inside the logPerson function.*/

function logPerson(person: Person) {
  let additionalInformation: string;
  if ((person as Admin).role) {
    additionalInformation = (person as Admin).role;
  } else {
    additionalInformation = (person as User).occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);