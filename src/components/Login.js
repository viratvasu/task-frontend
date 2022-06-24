import React from "react";
import axios from 'axios';

const Login = () => {
    const doLogin = e =>{
        e.preventDefault()
        axios.post('/api/token/',{"username":document.getElementById("username").value,"password":document.getElementById("password").value})
        .then(resp => {
            const token = resp.data.access
            if (token) {
                localStorage.setItem("token",token)
                window.location = "/"
            }
        })
        .catch(error => document.getElementById("message").innerHTML = "** username or password wrong **")
    }
    return ( 
        <div class="login-page">
            <div class="form">
                <form class="login-form" onSubmit={doLogin}>
                    <input type="text" placeholder="username" id="username" required/>
                    <input type="password" placeholder="password" id="password" required/>
                    <button>login</button>
                    <p id="message"></p>
                </form>
            </div>
        </div>
     );
}
 
export default Login;