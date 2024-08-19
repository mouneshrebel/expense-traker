import React from 'react'
import {Link} from 'react-router-dom'


const Signup = () => {

   

  return (
    <div>

<div className='d-flex justify-content-center align-items-center bg-primary  vh-100'> 
    <div className='bg-white p-4 rounded w-25'>
        <div><h2>Sign Up</h2></div>
      <from>

      <div className='mb-3'>
          <label htmlFor="email"><strong>Name</strong></label>
          <input type ='email' placeholder='Enter Name' className=' form-control rounded-0'/>
        </div>

        <div className='mb-3'>
          <label htmlFor="email"><strong>Email</strong></label>
          <input type ='email' placeholder='Enter Email' className=' form-control rounded-0'/>
        </div>

        <div className='mb-3'>
          <label htmlFor='password'> <strong>Password</strong></label>
          <input type ='password' placeholder='Enter Password'  className=' form-control rounded-0'/>
        </div>

        <button className='btn btn-success w-100'>Sign up</button>
        <p> You are agree terms and policies</p>
      
        <Link to='/login'>
         <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'><strong>Log In</strong></button>
         </Link>
        
      </from>
    </div>
  </div>

    </div>
  )
}

export default Signup