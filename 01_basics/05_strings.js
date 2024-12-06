//go through all methods in string so that interviews would be eas to crack

const name = "pranav"
const repocount = 50

console.log(name + repocount + " any");

//avoid using this syntax cause its outdated xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


//insted use this method to merge to strings : use    (`${}`)

console.log(`hello my name is ${name} and my repocount is ${repocount} `);


//(new) keyword use to crete new object in class
//also try to check results in browser inspect console
const gamename = new String("pranav-pb")

console.log(gamename [0]);   
 // its not array it key of string it starts from 0 to ...........so on

console.log(gamename.__proto__);     //syntax for object

console.log(gamename.length);        //for lenght we show how many char in index

console.log(gamename.toUpperCase());  // will show string in uppercase

console.log(gamename.charAt(2));  //by using chatat we can see, on what index character is spotted

console.log(gamename.indexOf('a'));  //by using indexof we can see, on which position character is spoted



const newstring = gamename.substring(0,4)
console.log(newstring);
//here we took new variable
//last value wont include and will only print pran which is start from 0


const anotherstring = gamename.slice(-3.4)
console.log(anotherstring);
// we use slice for reversing value

const newstringone = "  pranav  "
console.log(newstringone);
console.log(newstringone.trim());
//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
// trimstart and trimend both options are avi=ailable in trim











