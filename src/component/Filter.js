import React,{useContext, useState,createContext} from 'react';
import {UserContext} from "./Context";
import CardItem from "./CardItem";
import NavBar from './NavBar';
import Footer from './Footer';




export const Data = createContext([]);

const Filter = () => {
  

    const product = useContext(UserContext);
   
    let pro = product.Data;
 

    const [price, setprice] =useState("");
    const [products, setproducts] =useState();
    


    const handleChange=(e)=>{
       
       setprice(e.target.value);
      
     
      if (e.target.value === "all"  )  {
              setproducts(pro)
             }else{
              let data = [...pro];
        
                          
          let da = data.filter((item)=> Math.floor(item.rating.rate) == e.target.value)
             
                setproducts(da)
             }
            
      }

const handleradiobuttion =(e)=>{

if (!e.target.value) {
    setproducts(pro);
}else{
    let data = [...pro];
                       
    let da = data.filter((item)=> item.category == e.target.value)

          setproducts(da)
}
}

  return (
    <>
    <NavBar/>
  <Data.Provider value={{products}}>
     
    <div className="lg:flex  max-sm:flex-none  m-auto mb-10  ">
      <div className="m-10 text-start md:w-32 max-sm:text-center max-2xl:flex-none max-lg:flex max-sm:flex-wrap space-x-2">
      <p className=' font-bold text-red-600'><label htmlFor="prod">Filter By:</label></p><br/>
      <p className='text-red-500'>Rating</p>
        <select id="prod" value={price} onChange={handleChange}>
        <option value="all">all</option>
        <option value="1">Rate 1</option>
        <option value="2">Rate 2</option>
        <option value="3">Rate 3</option>
        <option value="4">Rate 4</option>
        </select>
        
        
        <p className='text-red-500'>category</p>
        <input type={"button"} onClick={handleradiobuttion} value={"Electroincl"} className='cursor-pointer hover:text-red-600' />
        <input type={"button"} onClick={handleradiobuttion} value={"Glasses"} className='cursor-pointer hover:text-red-600 '/>
        <input type={"button"} onClick={handleradiobuttion} value={"Clotheses"} className='cursor-pointer hover:text-red-600 '/>
        <input type={"button"} onClick={handleradiobuttion} value={"Watch"} className='cursor-pointer hover:text-red-600 '/>

     
       </div>
        {<CardItem/>}
        
    </div>
    
    <Footer />
        </Data.Provider>
</>
    );
}

export default Filter;
