
//NOW WE DONT NEED TO CREATE OBJECT AND FUNCTION
//WHENEVER WE START USING NEW KEYWORD (CONSTRUCTOR WILL CALL)
class user {
    constructor(username , email, password){
    this.username = username
    this.email = email
    this.password= password
    }
  

  //inside of the class dont need to write function keyword
  encryptPassword(){
    return `${this.password} abc`
  }

  changeusername(){
    return `${this.username.toUpperCase()}`
  }


 }
  const chai = new user("chai","abc",123)
console.log(chai.encryptPassword());
//just cause i  wanted to call only this method 
console.log(chai.changeusername());
// console.log(chai);



//Behind the Scene

//without class:
//What If i never had syntax of class :

function myfun(username,password,email){
  this.username = username
  this.password = password
  this.email = email
}

  myfun.prototype.encryptPassword = function(){
    return `${this.password}`
  }
  myfun.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
  }

  const tea = new myfun("pran",6,"mail.com")
  console.log(tea.encryptPassword());
  console.log(tea.changeusername());
  
  