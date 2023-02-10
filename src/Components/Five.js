
import React from 'react' 

import Form from 'react-bootstrap/Form';
import './Five.css'
const Five = () => { 
  function submit() {
    alert('registered successfully')
  }
  return ( 
    <div className='m'>
    <div className='container'>
        <div className='row'>  
        <div class="about-col-20">
    <h1 className='su'>GET IN TOUCH</h1> 
    <p>Please complete the form and we will get back to you</p>
  </div>
        <div className='about-col-10'>
            
            <Form> 
              <div>
              <label for='fname'>Name*</label> 
              <input type='text' id='fname' placeholder='Enter your name'></input> 
              </div> 
              <div className='c'>
              <label for='email'>Email*</label> 
              <input type='email' id='email' placeholder='Enter your email'></input> 
              </div>
              <div>
              <label for='phone'>Mobile Number*</label> 
              <input type='phone' id='phone' placeholder='Enter your mobile number'></input> 
              </div>
            </Form>
        
      <button   className='bu' onClick={submit}>
        REGISTER NOW
      </button>
    
  </div> 
  
  </div>
</div>
        </div>
    
  )
}

export default Five