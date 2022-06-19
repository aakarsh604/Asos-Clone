import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from "./error.module.css"
const Errorpage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  let handleError =()=>{
  navigate("/",{replace:true})
  }
  return (
    <div >

      <div className={styles.imgDiv}>
        <img className={styles.errorImg} src='https://i.pinimg.com/originals/f2/1b/2e/f21b2eafeee81e4b0122cc798c626129.png' alt='error'/>

      </div>
      <div className={styles.btnDiv}><button className={styles.errorBtn} onClick={handleError}>GO BACK</button></div> 
    </div>
  )
}

export default Errorpage
