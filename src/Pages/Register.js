import React from 'react'
import addImg from '../img/addImg.png'

const Register = () => {

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(e.target[0].value);
}

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='Logo'>Lama Chat</span>
            <span className='title'>Register </span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="passsword"/>
                <input style={{display:"none"}} type="file" id="File"/>
                <label htmlFor='File'>
                  <img src={addImg} alt=""/>
                  <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}

export default Register
