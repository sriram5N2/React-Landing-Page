import React from 'react'

const Mencollection = (props) => {
  const {title,image1,image2,image3,image4,image5,image6,price1,price2}=props.gents;
  return (
    <div className='Collections'>
      <h2>{title}</h2>
      <div className='Men-images'>
       <div className='one-unit'>
         <img src={image1} alt='Men-image1' />
          <h3>{price1}</h3>
       </div>
     
      
     
      <img src={image2} alt='Men-image2' />
      <img src={image3} alt='Men-image3' />
      <img src={image4} alt='Men-image4' />
      <img src={image5} alt='Men-image5' />
      <img src={image6} alt='Men-image6' />
      </div>
     
    </div>
  )
}

export default Mencollection
