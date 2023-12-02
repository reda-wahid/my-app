import React from 'react'




function AddToCard(props) {



  return (
    <>

      <input onClick={()=>props.addtocart(props.item)} value={props.value} type={props.type} className='cursor-pointer bg-red-400 hover:bg-red-600 transition ease-in-out delay-150  hover:-translate-y-1 text-white hover:scale-105  duration-200 p-2 m-3 rounded-md'/>
      
    </>
  )
}

export default AddToCard
