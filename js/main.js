const email = document.getElementById('email');

const error = document.getElementById('error_text');

function validation(){
  if (email.value =="" ) {
   email.style.border = "1px solid red"
   error.innerHTML = "add a valid email address"
   error.style.display = "block"
  }


  else {
    
  }
}
