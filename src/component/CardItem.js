import React,{useContext,createContext, Fragment,useState,useEffect} from 'react'
import {UserContext} from "./Context";
import  Filter, { Data } from './Filter'
import AddToCard from './AddToCard';
import { Link ,useParams} from 'react-router-dom';
import CartPay from './CartPay';




function Card() {
  const product = useContext(Data);
let prod = product.products;

  const produc = useContext(UserContext);
   let pr = produc.Data;

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
      },[cart]);
 ////////////////////////////////////////////////////////////////////////////////////
let ll = prod !== undefined? prod: pr;

  return (
    
    <>


{
<div className=" grid  max-md:grid-cols-1 md:grid-cols-2 w-screen gap-5 md:w-11/12 max-md:container max-md:m-auto max-md:w-96">

<div className=' grid lg:grid-cols-1 xl:grid-cols-3 max-md:grid-cols-1   gap-5   text-center mb-8' >

{ ll && ll.map((item) => {
return(


<Fragment key={item.id}>
<div className='border-2 border-slate-100 shadow-2xl rounded-md'>
<Link  >
<img  src={item.image} alt={item.name} className=' h-72 transition ease-in-out delay-150  hover:-translate-y-2 hover:rotate-3 hover:scale-125  duration-300'/>
</Link>
<div className='flex justify-around'>
<div>
<p>{item.title}</p>
<p className='text-red-700'>{item.price}</p>
</div>
<button ><AddToCard addtocart={addtocart} item={item} value={"Add To Card"} type={"button"}  /></button>

</div>

</div>

</Fragment>

)
})}

</div>  

<div className="">
{<CartPay cart={cart} setcart={setcart} id={"card"}/>}
</div>
</div>


}

    </>
    
  )
}

export default Card
