import React from 'react'
import "./Login.css"
import {Button} from '@material-ui/core'
import {auth, provider} from "./firebase"

function Login() {

    // SignIn Functionality
    const SignIn =() =>{
        auth.signInWithPopup(provider).then(res=>{

        }).catch((error)=> alert(error.message))
    }

    return (
        <div className = "login">
            <div className="login-container">
                <img src="https://images.pexels.com/photos/6140934/pexels-photo-6140934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <div className="login-text">
                        <h2>Sign in to Bwanji</h2>
                    </div>
                <Button onClick={SignIn}>Sign In With Google</Button>
            </div>
            
        </div>
    )
}

export default Login
