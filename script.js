'use strict'



window.addEventListener('load',()=>{
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const form = document.getElementById("forms")
    let email_Input = document.getElementById("email-input")
    let textForm = document.getElementById('text-error')
    let iconError = document.getElementById('error')
    let verificationEmail;

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        iconError.style.display = 'none'
        verificationEmail = emailRegex.test(email_Input.value)
        if(verificationEmail == true){
            textForm.innerHTML = "Congratulations, now you go receive notifications"
            textForm.style.color = 'mediumspringgreen'
            email_Input.value =""
        }
        else{
            textForm.innerHTML = "Please provide a valid email"
            textForm.style.color = 'hsl(0, 93%, 68%)'
            iconError.style.display = 'flex'

        }
    })
})