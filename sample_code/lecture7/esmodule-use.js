// import default value can be renamed

import { PI } from './esmodule.js';                 // name exported
import obj from './esmodule.js';                    // default exported
const { getDistance, printPoint } = obj;

console.log(PI);
printPoint([1, 2]);
console.log(getDistance([1, 2], [4, 6]));
