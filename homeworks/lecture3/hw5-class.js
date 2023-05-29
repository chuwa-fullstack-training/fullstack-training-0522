/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 * 
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */

class User {

    constructor (value){
        var password;
        this.setPassword = function(value) { 
            if(!password){
                password = value;
            }
            else{
                return new Error();
            }
         }
         this.checkPassword = function(value) { 
            return password === value? true : false;
         }
    }

    // checkPassword (password){
    //     return this.password === password? true : false;
    // }
}
//https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes
const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456')); // true
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined
console.log(user.setPassword('123')); // Error
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined