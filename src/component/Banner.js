import React from 'react'
import banner1 from '../Assets/Banner/banner-1.png';
import banner2 from '../Assets/Banner/banner-2.png';


function Banner() {
    console.log(banner2);
  return (
    <>
      <div className='flex container m-auto mt-20 mb-20 justify-between'>
        <div><img src={banner1} alt=""/></div>
        <div><img src={banner2} alt=""/></div>
      </div>
    </>
  )
}

export default Banner
