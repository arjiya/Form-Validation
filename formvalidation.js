const name=document.getElementById('name');

const email=document.getElementById('email');

const password=document.getElementById('password');
const passwordInput=document.getElementById('password');
const togglePassword=document.getElementById('togglePassword');

const confirmpasswordInput=document.getElementById('confirmpassword');
const toggleconfirmPassword=document.getElementById('toggleconfirmPassword');

const confirmpassword=document.getElementById('confirmpassword');

const form=document.getElementById('form');

const name_error=document.getElementById('name_error');

const email_error=document.getElementById('email_error');

const password_error=document.getElementById("password_error")

const confirmpassword_error=document.getElementById("confirmpassword_error")

const confirmpassword_match=document.getElementById("confirmpassword_match")
const submitButton = document.querySelector('.btn');
const popup = document.querySelector('.popup');
const okButton = popup.querySelector('button');

form.addEventListener('submit',(e)=>{

    var email_check=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if(name.value ==='' || name.value==null)
        {
        e.preventDefault();
        name_error.innerHTML="Name is required";
        name_error.style.color="red";
    }

    if(!email.value.match(email_check))
    {
        e.preventDefault();
        email_error.innerHTML="Valid Email is required";
        email_error.style.color="red";
    }

    if(password.value==='' || password.value==null){
        e.preventDefault();
        password_error.innerHTML="password is required"
        password_error.style.color="red";
    }

    if(password.value !== confirmpassword.value){
        e.preventDefault();
        confirmpassword_match.innerHTML="password doesnt match"
        confirmpassword_match.style.color="red";
    }else if (password.value==confirmpassword.value){
         e.preventDefault();
        confirmpassword_match.innerHTML="password match";
        confirmpassword_match.style.color="green";
      

    }

    
});

togglePassword.addEventListener('click',()=>{
    const isPassword=passwordInput.type==='password';
    passwordInput.type=isPassword?'text':'password';
    togglePassword.textContent=isPassword?'Hide':'Show';
});

toggleconfirmPassword.addEventListener('click',()=>{
    const isconfirmPassword=confirmpasswordInput.type==='password';
    confirmpasswordInput.type=isconfirmPassword?'text':'password';
    toggleconfirmPassword.textContent=isconfirmPassword?'Hide':'Show';
});

submitButton.addEventListener('click',() =>{
    popup.style.display='block';
});
okButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  
  
  popup.style.display = 'none';





  
