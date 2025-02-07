// ************************************************************
// forin loop in objects

const myobj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myobj) {
    // console.log(`${key} shortcut  is for ${myobj[key]} `);
    
}

// **********************************************************************

// forin loop in array

const programming = ["js","c++","py","rb","java"]

for (const key in programming) {
    // console.log(programming[key]);
    
}


// ****************************************************************8
// map by using forin

const map = new Map()
map.set('IN', "India")
map.set('US', "United states of america")
map.set('FR', "Frace")
map.set('UK', "United Kingdom")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
    
}

//  this map is not iteratable and cannot written in loop

// ***********************************************
// we will always use forin loop on object
//  also we will use forof loop on array

// but why??????????????????????????? we cant use 
