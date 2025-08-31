import React from 'react'

const Womencollection = (props) => {
 const {title,image1,image2,image3,image4,image5,image6}=props.ladies 
   
  return (
    <div className='Collections'>

       <h2>{title}</h2>
       <div className="women-banner">
          <img  src='../assets/LadiesBanner.gif' alt='Ladies-Banner'/>
       </div>
      <div className='Men-images'>
      <img src={image1} alt='Women-image1' />
      <img src={image2} alt='Women-image2' />
      <img src={image3} alt='Women-image3' />
      <img src={image4} alt='Women-image4' />
      <img src={image5} alt='Women-image5' />
      <img src={image6} alt='Women-image6' />
      </div>
     
    </div>
  )
}

export default Womencollection
