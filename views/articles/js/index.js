console.log("hello");
const firstname = document.getElementById('firstName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const lastName = document.getElementById('lastName');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const userName = document.getElementById('userName');
let validEmail = false;
let validPhone = false;
let validUser = false;
firstname.addEventListener('blur', ()=>{
  console.log("name is blurred");
  // Validate name here
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = firstname.value;
  console.log(regex, str);
  if(regex.test(str)){
      console.log('Your name is valid');
      firstname.classList.remove('is-invalid');
      validUser = true;
  }
  else{
      console.log('Your name is not valid');
      firstname.classList.add('is-invalid');
      validUser = false;
      
  }
})

lastName.addEventListener('blur', ()=>{
  console.log("name is blurred");
  // Validate name here
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = lastName.value;
  console.log(regex, str);
  if(regex.test(str)){
      console.log('Your name is valid');
      lastName.classList.remove('is-invalid');
      validUser = true;
  }
  else{
      console.log('Your name is not valid');
      lastName.classList.add('is-invalid');
      validUser = false;
      
  }
})

userName.addEventListener('blur', ()=>{
  console.log("name is blurred");
  // Validate name here
  let regex = /^[_a-zA-Z]([_0-9a-zA-Z]){2,12}$/;
  let str = userName.value;
  console.log(regex, str);
  if(regex.test(str)){
      console.log('Your name is valid');
      userName.classList.remove('is-invalid');
      validUser = true;
  }
  else{
      console.log('Your name is not valid');
      userName.classList.add('is-invalid');
      validUser = false;
      
  }
})

email.addEventListener('blur', ()=>{
  console.log("email is blurred");
  // Validate email here
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if(regex.test(str)){
      console.log('Your email is valid');
      email.classList.remove('is-invalid');
      validEmail = true;
  }
  else{
      console.log('Your email is not valid');
      email.classList.add('is-invalid');
      validEmail = false;
  }
})

phone.addEventListener('blur', ()=>{
  console.log("phone is blurred");
  // Validate phone here
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if(regex.test(str)){
      console.log('Your phone is valid');
      phone.classList.remove('is-invalid');
      validPhone = true;
  }
  else{
      console.log('Your phone is not valid');
      phone.classList.add('is-invalid');
      validPhone = false;
      
  }
})
let signIn = document.getElementById('signIn');
signIn.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})
