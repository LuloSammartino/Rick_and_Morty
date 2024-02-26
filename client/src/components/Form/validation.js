

const validarMail = (mail) => {
    
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/    

    if(regexEmail.test(mail) === false){
        return false
    } return true   
}

const validarPassword = (password) => {
    
const regexPassword = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&_   ])\S{8,64}$/
    
    if(regexPassword.test(password) === false){
       return false  
    } return true
}  

module.exports={
    validarMail,
    validarPassword
}