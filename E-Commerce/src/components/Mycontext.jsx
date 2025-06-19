import React, { createContext, useEffect, useState } from 'react'
import { products } from '../DataFile/products';
export const globalContext = createContext();

export default function Mycontext({children}) {
const [data,setData]=useState([])
const fetchData=()=>{
    setData(products)

}
useEffect(()=>{
    fetchData()
},[])
  return (
   <globalContext.Provider value={{data}}>
      {children}
   </globalContext.Provider>

 


  )
}
