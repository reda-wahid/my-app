import React ,{createContext } from 'react';
import Data from "../Assets/Data.json";
import Filter from "./Filter";




export const UserContext = createContext();



export default function Home() {


  return (
    
   <UserContext.Provider value={{Data}}>
      
<Filter/>
  </UserContext.Provider>

  
  )
}
