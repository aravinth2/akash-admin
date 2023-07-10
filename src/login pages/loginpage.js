import React from 'react';
import './loginpage.css';

function Loginpage() {
  return (
    <div className='main-box'>
        <div className='left-box'>
            <h1>Board.</h1>
        </div>
        <div className='right-box'>
           <div className='contents'>
            <h2>Sign In</h2>
            <p className='first-p'>Sign in your account</p>
            <button className='buttons'><i class="fa-brands fa-google"></i>Sign in with Google</button>
            <button className='buttons'><i class="fa-brands fa-apple"></i>Sign in with Apple</button>

            <div className='second-box'>
                <label className='labels'>Email Address</label><br/>
                   <input type='email' placeholder='johndoe@gmail.com' /><br/>
                <label className='labels'>Password</label><br/>
                    <input type='password' placeholder='' /><br/>
                <a>Forgot password</a><br/>
                <button className='main-button'>Sign In</button>
            </div>
            <p className='final-p'>Don't have an account? <span>Register Here</span></p>
           </div>  
        </div>
    </div>
  )
}

export default Loginpage;