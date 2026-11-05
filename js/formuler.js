let form=document.getElementById("form")
let inputs=document.querySelectorAll("input")
form.addEventListener("submit",validation)
function validation(event){
event.preventDefault();
  inputs.forEach(input=>{
    if(input.value.trim()===""){
        input.nextElementSibling.textContent=`${input.dataset.id} est invalide `

    }
    
    else if(input.dataset.id==="username" && !/^[a-zA-Z][a-zA-Z' -]*[a-zA-Z]$/.test(input.value)){
        input.nextElementSibling.textContent=`username is bad`
    }
    else if((input.dataset.id==="pseudo") && !/^[a-zA-Z]{1,20}[0-9]{0,3}$/.test(input.value)){
        input.nextElementSibling.textContent=`pseudo is bad`
    }
    else if(input.dataset.id==="email" && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value)){
        input.nextElementSibling.textContent=`gmail is invalide`
    }
    else if(input.dataset.id==="password" && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(input.value)   ){
        input.nextElementSibling.textContent=`password is invalide`
    }
    else{
        input.nextElementSibling.textContent=""
    }
})
}
