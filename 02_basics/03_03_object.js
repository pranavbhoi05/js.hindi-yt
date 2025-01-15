const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// console.log(course["courseInstructor"]);

// in order to make code clean use this method. syntax (const {} = variable)
// const {courseInstructor} = course
// console.log(courseInstructor);

// same we can destructuring ({}) of Object****************************
const {courseInstructor: instructon} = course
console.log(instructon);

//array can be also destructuring


//api's*******************************************************

//all keys and valur both are wrintten in json
// but numbers anad boolean arent writeen in "" format
//e.g
// {
//     "name" : "pranav",
//     "cousername" : "js in hindi",
//     "price" : "free"
// }


//how to use fetch method************************************************
