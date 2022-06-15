import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./productDetails.module.css"
const Product = ({data}) => {
  return (
   
    
    <div className={styles.proDiv} key={data.id}>
        <Link className={styles.link}  to={`/productDetails/${data.id}`}>
        <img src={data.Image} alt="img"/>
        <h3>{data.BrandName}</h3>
        <h4>{data.Price}</h4>
        </Link>
    </div>
    
    
  )
}

export default Product