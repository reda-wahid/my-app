import React,{Fragment} from 'react'




 function Cart(props) {
  
  let data =props.cart;
  let setcart = props.setcart;
const totalPrice = data.reduce((price, item) => price + item.qty * item.price, 0);



const increment =(item) => {
 let da = data.find(i => i.id === item.id);
 let set = data.map(i => {
 return i.id === item.id? {...da,qty: da.qty+1}: i;
 })

 setcart(set);
}
const decrement =(item) => {
  let da = data.find(i => i.id === item.id);
  let set = data.map(i => {
  return i.id === item.id? {...da,qty: da.qty-1}: i;
  })
 
  setcart(set);

  }

  const removeCart=(prod)=>{
    const product = [...data];
    setcart(product.filter(item=>item.id !== prod.id))
}



  return (
    <>




<div className="max-sm:grid-cols-1 w-96 sm:space-x-14 h-min-50 max-md:container max-md:m-auto max-md:w-96">
        <div className="grid gap-5">
          
        {data.length === 0? <p className='font-bold text-4xl text-red-400 text-center pb-2'>cart empty</p>:
        <p className='font-bold text-4xl border-b-2 border-red-400 pb-2' >My Carts</p>
        }
          {
            data.map((item)=>{
              return(
                <Fragment key={item.id}>
              <div className="flex justify-between border-2 border-red-200 relative shadow-md">
             
              
              <div className='flex gap-4'>
                    <img className="w-20" src={item.image} alt='gg'/>
                    <div className="font-thin">
                     <p className=''>{item.title}</p>
                     <p className='text-red-500'>{item.price}$</p>
                    </div>
                  </div>
   
                <div className="space-y-5  pt-4 pr-10">
                
                  
                  <div  className="btn flex text-center h-10">
                  
                   <button onClick={()=>decrement(item)} className='text-2xl p-2 border-2 border-red-400 hover:bg-red-400  cursor-pointer'>
                  
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                   </button>
                   <div className='m-2 text-red-900'>{item.qty}</div>
                   <button onClick={()=>increment(item)} className='font-bold text-2xl p-2 border-2 border-red-400 hover:bg-red-400  cursor-pointer '>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                   </button>
                  
                  </div>
                </div>
   
               <div onClick={()=>removeCart(item)} className='cursor-pointer  border-2 border-red-400 p-2 rounded-full absolute -top-3 -right-3 hover:bg-red-400  hover:text-white'>
               
               <svg className="" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
           
               </div> 
               </div>
             </Fragment>
              );
            })
            
          }
        
        
        </div>
        <div className="w-6/12 ">
          <p className="font-bold text-4xl border-b-2 border-red-400 pb-2  ">Cart Summary</p>
          <div className='flex justify-between mt-5'>
         Total Price: <div className="text-red-400" >{totalPrice}$</div>
         </div>

        </div>
      </div>
     
   
    </>
  )
}

export default Cart  ;




