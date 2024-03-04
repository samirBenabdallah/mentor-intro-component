let inputs = document.querySelectorAll("form > div > input");
let email = document.querySelector(`input[type="email"]`);
let button = document.querySelector("form > button");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    inputs.forEach((e)=>{
        e.parentElement.classList.remove("erreur")
        if (e.value === ""){
            e.parentElement.classList.add("erreur");
        }
    })
    let emailValue = (email.value+"").split("") ;
    console.log(emailValue.indexOf("@") === -1);
    if (emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1) 
        email.parentElement.classList.add("erreur");
})