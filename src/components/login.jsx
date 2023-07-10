import React from "react";
import {NavLink} from 'react-router-dom';

function Login(){
    return(
        <div>
            <div className="form-box">
                <div className="form-value>">
                    <form action="">
                        <h2 >Login</h2>
                        <div className="inputbox">
                            <ion-icon name="mail-outline" ></ion-icon>   
                            <input type="email" name="email" placeholder= "enter email" required />
                            <label htmlFor="email"></label>
                            <br /><br /><br />
                            <ion-icon name="lock-closed-outline" ></ion-icon>
                            
                            <input type="password" placeholder="enter password" required />
                            <br /><br /><br />
                            
                            <div className="btn-group" style={{width: "200px"}}>
                                <input type="button" id="btn" value="Login"/>
                            </div>
                        </div>
                            <NavLink className="registerLink" to="#r" >forgot password ?</NavLink>
                        
                        <div className="register">
                            <h4>Don't hava an accout ?<NavLink className="registerLink" to="/register" >Register</NavLink></h4>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;