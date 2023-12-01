import React ,{Fragment} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DataSlide from "../Assets/DataSlide";
import AddToCard from './AddToCard';
import { NavLink } from 'react-router-dom';


function Home() {
  let a = window.innerWidth<"888"? false : true;
    const settings = {
        dots: a,
        fade: a,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        speed: window.innerWidth<"888"? false:2000,
        autoplaySpeed: window.innerWidth<"888"? false: 2000,
        cssEase: "linear"
      };

  return (
    <>
      {
      <div className='home max-sm-m-0   md:mt-52  max-sm-text-center '>
        <Slider {...settings}>
        {
            DataSlide.map((item)=>{
                return(
                    <Fragment  key={item.id} >
                    <div className="md:flex justify-between max-md:flex max-md:flex-wrap-reverse ">
                    <div className="max-sm:mt-5 space-y-8 max-sm-mb-5 ">
                    <h1 className=' font-bold text-6xl '>{item.title}</h1>
                    <p className=' text-md md:w-96'>{item.description}</p>
                    <NavLink to={"/products"}>
                      <button className='cursor-pointer bg-red-400 hover:bg-red-600 transition ease-in-out delay-150  hover:-translate-y-1 text-white hover:scale-105  duration-200 p-2 m-3 rounded-md'>Visite Collection</button>
                    </NavLink>
                    </div>
                    <img className='grid content-center' src={item.image} alt={item.title}/>
                    </div>
          </Fragment>
                )
          
            })
        }
       
        </Slider>
      </div>}
    </>
  )
}

export default Home
