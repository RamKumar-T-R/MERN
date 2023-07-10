import React from "react";
import {NavLink} from 'react-router-dom';

function validateForm() {  

  var pw1 = document.getElementById("pwd").value;  
  var pw2 = document.getElementById("con-pwd").value;  
  var name1 = document.getElementById("firstname").value;  
  var name2 = document.getElementById("lastname").value;  
    
  if(name1 == "") {  
    document.getElementById("fname1").innerHTML = "**Fill the first name";  
    return false;  
  }  
      
  if(!isNaN(name1)){  
    document.getElementById("fname1").innerHTML = "**Only characters are allowed";  
    return false;  
  }  

  if(!isNaN(name2)){  
    document.getElementById("lname2").innerHTML = "**Only characters are allowed";  
    return false;  
  }   
    
  if(pw1 == "") {  
    document.getElementById("message1").innerHTML = "**Fill the password please!";  
    return false;  
  }  
   
  if(pw2 == "") {  
    document.getElementById("message2").innerHTML = "**Enter the password please!";  
    return false;  
  }   
   
  if(pw1.length < 8) {  
    document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
    return false;  
  }  
  if(pw1.length > 15) {  
    document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
    return false;  
  }  
  
  if(pw1 != pw2) {  
    document.getElementById("message2").innerHTML = "**Passwords are not same";  
    return false;  
  } else {  
    alert ("Your password created successfully");  
  }  
}  

export default function Register(){
  
    return(
        <div>
          <div className="form-box"> 
          
          <h1 style={{textAlign: "center" }}>Register!</h1>
          <br />
        
          <div style={{textAlign:"center"}}>
            <label htmlFor="firstname">First Name</label>
            <br />
            <input type="text" id="firstname" required />
            <span id="fname1" style={{color:"red"}}></span>
            <br /><br />
            <label htmlFor="lastname">Last Name</label>
            <br />
            <input type="text" id="lastname" />
            <span id="lname2" style={{color:"red"}}></span>
            <br /><br />
            <label htmlFor="mail">E-mail</label>
            <br />
            <input type="text" id="mail" />
            <br /><br />
            <label htmlFor="phone">phone number</label>
            <br />
            <input type="text" id="phone" />
            <br /><br />
            <label htmlFor="pwd">create password</label>
            <br />
            <input type="password" id="pwd" />
            <span id="message1" style={{color:"red"}}></span>
            <br /><br />
            <label htmlFor="con-pwd">confirm password</label>
            <br />
            <input type="password" id="con-pwd"  />
            <span id="message2" style={{color:"red"}}></span>
            <br /><br />
            <br /><br />
            <div className="btn-group">
            <input type="button" id="btn" value="Submit" onClick={validateForm} />
              <h4>Already have an account?<NavLink className="registerLink" to="/login" >LOGIN</NavLink></h4>
            </div>
          </div>
        </div>
        </div>
    )
};