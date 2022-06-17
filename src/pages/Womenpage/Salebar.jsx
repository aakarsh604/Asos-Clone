import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Salebar = () => {
  return (
    <div className="salebardiv">
            <div><Link to="/women"><Button rounded="0px" border="2px solid black" size="sm" bg="transparent" fontWeight={700} _hover={{color : "white"}}>Women</Button></Link></div>
            <div className='salebarsub'>
                <div>SALE UPTO 70% OFF!</div>
                <div>IT'S CALLED BIG DISCOUNT ENERGY</div>
            </div>
            <div><Link to="/men"><Button rounded="0px" border="2px solid black" size="sm" bg="transparent" fontWeight={700} _hover={{color : "white"}}>Men</Button></Link></div>
    </div>
  )
}

export default Salebar