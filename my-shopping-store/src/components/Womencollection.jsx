import React from 'react'

const Womencollection = (props) => {
 const {title,image1,image2,image3,image4,image5,image6,price1,price2,price3,price4,price5,price6}=props.ladies 
   
  return (
    <div className='Collections'>

       <h2>{title}</h2>
       <div className="women-banner">
          <img  src='../assets/LadiesBanner.gif' alt='Ladies-Banner'/>
       </div>

       <div className='Men-images'>


       <div className='box'>
        <img src={image1} alt='Men-image1' />
          <h3>{price1}</h3>
          <button className="buy-now-btn"type='button'>Buy Now</button>
       </div>
         
       
     
      <div className='box'>
         <img src={image2} alt='Men-image2' />
       <h3> {price2} </h3>
       <button className="buy-now-btn"type='button'>Buy Now</button>

      </div>
     
     <div className='box'>
      <img src={image3} alt='Men-image3' />
      <h3>{price3}</h3>
      <button className="buy-now-btn"type='button'>Buy Now</button>

     </div>
      <div className='box'>
         <img src={image4} alt='Men-image4' />
         <h3>{price4}</h3>
         <button className="buy-now-btn"type='button'>Buy Now</button>

      </div>
     <div className='box'>
      <img src={image5} alt='Men-image5' />
       <h3>{price5}</h3>
       <button className="buy-now-btn"type='button'>Buy Now</button>


     </div>
      <div className='box'>
         <img src={image6} alt='Men-image6' />
          <h3>{price6}</h3>
          <button className="buy-now-btn" type='button'>Buy Now</button>

      </div>
     
      </div>
     
      
    </div>
  )
}

export default Womencollection
