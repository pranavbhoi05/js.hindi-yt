// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log(`its january`);
        break;
    case 2:
        console.log(`its feb`);
        break;
    case 3:
        console.log(`its march`);
        break;
    case 4:
        console.log(`its april`);
        break;

    default:
        console.log(`default case match`);
        break;
}

//break is most important in switch , if you won't break the statement after condition gets true , it will keep executing the rest code
// whenever case matches then entire code gets executed except default statement 
//  if conditions doesnt match then , code will run default statement