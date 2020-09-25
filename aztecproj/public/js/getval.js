const usernameOfCustomer = document.getElementById('usernameOfCustomer');
const emailOfCustomer = document.getElementById('emailOfCustomer');
const phoneOfCustomer = document.getElementById('phoneOfCustomer');
const postalcode = document.getElementById('postalcode');

let validPostalCode = false;
let validEmail = false;
let validPhone = false;
let validUser = false;

$('#failure').hide();
$('#success').hide();

usernameOfCustomer.addEventListener('blur', ()=>{
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str =usernameOfCustomer.value;
    if(regex.test(str)){
        usernameOfCustomer.classList.remove('is-invalid');
        usernameOfCustomer.classList.add('is-valid');
        validUser = true;
    }
    else{
        usernameOfCustomer.classList.add('is-invalid');
        validUser = false;
        
    }
})

emailOfCustomer.addEventListener('blur', ()=>{
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = emailOfCustomer.value;
    if(regex.test(str)){
        emailOfCustomer.classList.remove('is-invalid');
        emailOfCustomer.classList.add('is-valid');
        validEmail = true;
    }
    else{
        emailOfCustomer.classList.add('is-invalid');
        validEmail = false;
    }
})

phoneOfCustomer.addEventListener('blur', ()=>{
    let regex = /^([0-9]){10}$/;
    let str = phoneOfCustomer.value;
    if(regex.test(str)){
        phoneOfCustomer.classList.remove('is-invalid');
        phoneOfCustomer.classList.add('is-valid');
        validPhone = true;
    }
    else{
        phoneOfCustomer.classList.add('is-invalid');
        validPhone = false;
        
    }
})

postalcode.addEventListener('blur', ()=>{
    let regex = /^([0-9]){6}$/;
    let str = postalcode.value;
    if(regex.test(str)){
        postalcode.classList.remove('is-invalid');
        postalcode.classList.add('is-valid');
        validPostalCode = true;
    }
    else{
        postalcode.classList.add('is-invalid');
        validPostalCode = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    
    if(validEmail && validUser && validPhone && validPostalCode){
        let failure = document.getElementById('failure');

        let success = document.getElementById('success');
        success.classList.add('show');
    
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})
