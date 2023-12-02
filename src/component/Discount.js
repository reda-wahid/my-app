import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Ddata from "../Assets/Discount.json"
import { Fragment } from 'react'


function Discount() {
    let s = window.innerWidth<"700" ? 1: window.innerWidth<"1100"? 4:6;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: s,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <>
    <div className="mt-8">
        <p className='text-red-500 font-bold text-5xl'>Discount</p>
        
      <Slider {...settings}>
        {Ddata.map((value) => {
          return (
            
            <Fragment key={value.id}>
              <div className='box product border-spacing-3 border-1 border-red-50 shadow-md rounded-full text-center grid gap-2 m-3 bg-white  ' >
                <div className='img'>
                  <img src={value.cover} alt='' width='100%' />
                </div>
                <h4>{value.name}</h4>
                <p>{value.price}</p>
              </div>
              </Fragment>
           
          )
        })}
      </Slider>
     
     </div>
   
    </>
  )
}




export default Discount
