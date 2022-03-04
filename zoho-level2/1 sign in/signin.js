function validate()
{
var email=document.getElementById("email").value; 
var password=document.getElementById("password1").value; 
  if(email=="demo@gmail.com" && password=="user")
  {
     alert("Login successfully");
    return false;
  
  }
   else
  {
    alert("login failed");
  }
}