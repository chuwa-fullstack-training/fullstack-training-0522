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
function User() {
    // implement here
    var password=null;

    function setPassword(input){
        if(password!=null){
            return "Error";
        }
        password = input;
        // this.password is wrong
        // The function setPassword is trying to set the password to the this keyword, 
        // but within the context of this function this does not refer to the User function. 
        // Instead, it refers to the global object (in browsers, that's window), 
        // because setPassword and checkPassword are not methods on an object - they're inner functions.
    }

    function checkPassword(input){
        return input===password
    }

    return {
        setPassword: setPassword,
        checkPassword: checkPassword
    }
}

const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456')); // true
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined
console.log(user.setPassword('123')); // Error
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined