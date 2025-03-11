//whervever i saves the data
// in servers like database and mongodb whenever we create user,it will attach underscore id to username

class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username : ${this.username}`);
    }
    //i dont want to give functionality to create unique id to all people, so i use static so it will throw error !!
    static createId(){
        return `123` 
    }
}

const pranav = new user("pranav")
// console.log(pranav.createId());

// 1. createId is a static method, so you call it directly on the class user, like user.createId().
// 2. You cannot call it on an instance like pranav.createId() because static methods don't belong to instances.

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email

    }
}

const iphone = new teacher("iph@ne.com","iphone")
// console.log(iphone.createId()) //wont work cause of static

iphone.logme()

//Static = Belongs to the class, not to instances.
// Use it for shared functionality or utility methods.
// Call static methods/properties directly on the class, not on objects.