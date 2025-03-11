class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }
   // we can easyly apply on getters and setters on variable
      get password(){
        return this.password.toUppercase()
      }
      set password(value){
        this.password = value
      }
}

const pranav = new user("pran@gmail.com","123")
console.log(pranav.password);

