// there are two methos to declear objects

// 1.singleton 
// 2.object literals 



// Object literals***********************************************

const musym = Symbol("key1")
//can be ased in interview
//syntax for symbol and it  should  always be declear before usein
// shuld be define in [symbol]

const jsuser = {
    name : "pranav",
    "full name ": "pranavbhoir",
    [musym] : "mykey1",
    age : 24,
    email : "pranav@google.com",
    isLoggedIn : false,
    lastlogindays : ["monday","saturday"],
    location : "india"

}

// console.log(jsuser.name);
// console.log(jsuser["full name "]);
// console.log(jsuser[musym]);

jsuser.email = "pranavbhoir@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "pranav@aws.com"
// console.log(jsuser);


//*****************functions ****************************//

jsuser.greeting = function(){
    console.log("hello js user");
    
}
jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`); //whenever we want to perform task on same object as reference we use this. keyword
    
}

console.log(jsuser.greeting); 
//just because i freeze the item above, function didint work

// console.log(jsuser.greeting2());
