const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


let validEmail = false;
let validPhone = false;
let validUser = false;


$('#failure').hide();
$('#success').hide();

name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([a-zA-Z])/;
    let str = name.value;
    if (regex.test(str)) { 
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        validUser = true;
    }
    else {
        name.classList.add('is-invalid');
        name.classList.remove('is-valid');
        validUser = false;

    }
})

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)){
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validPhone = true;
    }
    else {
        phone.classList.add('is-invalid');
        phone.classList.remove('is-valid');
        validPhone = false;

    }
})

let btn = document.getElementById('btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    alert('Thank You for Messaging Me I will reply soon')
})