// this file is based on 4.call.js file and inheritance

// small example of inheritance
// node : prototype is not feature of javascript, its bevahior of js




//if i wanted to perform protoypal behavior forcefully use this example:

class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is ${this.username}`);   
    }
}

//now class teacher got all functionality of user
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai = new teacher("pranav","email.com",123)
chai.addcourse()
// chai.logme()
const masalachai = new user("masalachai")

masalachai.logme()

console.log(chai instanceof user);
console.log(chai instanceof teacher);



