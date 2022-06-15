import React, { useEffect } from 'react'
import { useState } from 'react'
import Product from './Product'
import axios from "axios"
const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        if(products.length===0){
            axios.get(" http://localhost:8080/Shoes")
            .then((res)=>(setProducts(res.data)))
        }
      
    
      return () => {
        
      }
    }, [])
    
  return (
    <div >Products::
   <div>
    {products.map((el)=>(
        <Product key={el.id} data={el} />
    ))}
   </div>




    </div>


  )
}

export default Products