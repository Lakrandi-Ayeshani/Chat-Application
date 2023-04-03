import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='Logo'>Lama Chat</span>
            <span className='title'>Login </span>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="passsword"/>
                <button>Sign Up</button>
            </form>
            <p>you dont have an account? Login</p>
        </div>
    </div>
  )
}

export default Login
