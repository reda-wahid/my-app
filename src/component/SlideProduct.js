import React,{Fragment,useEffect,useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from "../Assets/Data.json"
import AddToCard from "./AddToCard"
import { Link ,useParams} from 'react-router-dom';


function SlideProduct() {

let s = window.innerWidth<"800" ? 1: window.innerWidth<"1100"? 2:3;


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: s,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        
        cssEase: "linear"
      };
  ////////////////////////////////////////////////////////////////////////////////////////
  let {id} = useParams();
  console.log(id);
const [cart , setcart] =useState(JSON.parse(localStorage.getItem('cart')) || []);
  

  const addtocart =(prod)=>{
   const product = [...cart];
   var newproduct =false;
   product.forEach(item=>{
       if(item.id == prod.id){
           newproduct=true;
           item.qty++;
       }
   })
  if(!newproduct){
   product.push({...prod,qty:1});
    }
   setcart(product);
}

  console.log(cart,"gf");

////////////////////////////////
useEffect(()=>{
 localStorage.setItem('cart', JSON.stringify(cart))

 localStorage.setItem('addtocart', JSON.stringify(addtocart))

     },[cart]);
////////////////////////////////////////////////////////////////////////////////////    
  return (
    <>
{ <div className='product max-sm:overflow-hidden m-0 '>

    <Slider {...settings}  >
    
    { 
    
    data.filter((i)=> i.size === data.size).map((item) => {
return(

<div key={item.id} className=' grid lg:grid-cols-3 max-md:grid-cols-1 md:grid-cols-2 p-5  gap-5  justify-between text-center md:h-full' >


<div className='border-2 border-slate-100 shadow-lg grid gap-4 rounded-md bg-white '>
<img src={item.image} alt={item.name} className='md:h-full sm:h-52 h-72 transition ease-in-out delay-150  hover:-translate-y-2 hover:rotate-3 hover:scale-125  duration-300'/>
<div className='flex justify-around'>
<div>
<p>{item.title}</p>
<p className='text-red-700'>{item.price}</p>
</div>
<button ><AddToCard addtocart={addtocart} item={item} value={"Add To Card"} type={"button"}/></button>

</div>

</div>


</div>
)
})
}
    


    </Slider>

 </div>}
      
    </>
  )
}

export default SlideProduct
