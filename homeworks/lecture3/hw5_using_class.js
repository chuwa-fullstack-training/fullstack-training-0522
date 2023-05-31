class User{
  password;
  constructor(){
    this.password = null;
  }

  setPassword(input){
    if(this.password!=null){
        return "Error";
    }
    this.password = input;
  }

  checkPassword(input){
    return input===this.password
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