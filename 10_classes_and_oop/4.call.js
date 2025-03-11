// The call method is used to invoke a function with a specific this value and arguments.


//WHATS HAPPING HERE:
//in india function i wanted to call MY function in usa,so I CALL my function in USA instead of india 

//so we use call


// # USA
function fname(usename){
    this.usename = usename
    console.log("hell");
    
}
//# INDIA
    function bname(username,password,email){
        fname.call(this, username)
        //why i take (this) here cause .this will also disapear once the fname function executes in call stack, so i passes parameterwhich is (this) now bname function has my own (THIS),cause (this) is globle object.
        //value of (this) in browser is window
        //value of (this) in node is object 

        this.password = password
        this.email = email
    }

    const j = new bname("pranav",5,"pran@gmail.com")
    console.log(j);
    