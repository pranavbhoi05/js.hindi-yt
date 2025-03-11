const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function(button){
    button.addEventListener("click",function (e) {
        console.log(e);
        console.log(e.target);
        
       switch (e.target.id) {
        case "grey": body.style.backgroundColor = "grey"
            break;
        case "yellow": body.style.backgroundColor = "yellow"
            break;
        case "white": body.style.backgroundColor = "white"
            break;
        case "blue": body.style.backgroundColor = "blue"
            break;
       
        default:
            break;
       }
        
    })
})