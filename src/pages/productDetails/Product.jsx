import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "./productDetails.module.css"
const Product = ({data}) => {
  const location = useLocation();
  const from ={
     pathname: location.pathname
  }
  return (
   
    
    <div className={styles.proDiv} key={data.id}>
        <Link className={styles.link}  to={`/productdetails/${data.id}`} state={from}>
        <img src={data.Image} alt="img"/>
        <h3>{data.Brand_Name}</h3>
        <h4>{data.Price}</h4>
        </Link>
    </div>
    
    
  )
}

export default Product