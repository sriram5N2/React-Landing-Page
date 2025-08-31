import React from 'react'

const Navbar = () => {
  return (
    <div>


    <div className="main-container">

      <div className="left">
      <h2>Shopper Stop</h2>
     </div>
     <div className="center">
      <div className="name-section">
        <ul className='list-section'>
          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>
     </div>

     <div className="search-section">
      <input type='text' placeholder='Search...'/>
     </div>
     <div className="right">
      <button type='button' className='sign-up-btn'>Sign Up</button>
      <button type='button'className='login-btn'>Login</button>
     </div>

    </div>
     

      
    </div>
  )
}

export default Navbar
