import React from 'react'
import {Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const MenSaleCard = ({item}) => {
  return (
    <div>  
      {item.name=="SHOES"?<Link to={"/products/shoes"}><img src={`${item.imgurl}`} alt="" />
    <Text fontSize="lg" fontWeight="700" color="black" letterSpacing="1px" mt="15px">{item.name}</Text>
    <Text fontSize="md" fontWeight="500" color="black" mt="5px">{item.subtitle}</Text></Link>:<>
      <img src={`${item.imgurl}`} alt="" />
     <Text fontSize="lg" fontWeight="700" color="black" letterSpacing="1px" mt="15px">{item.name}</Text>
     <Text fontSize="md" fontWeight="500" color="black" mt="5px">{item.subtitle}</Text></>
    }  
    
    </div>
  )
}

export default MenSaleCard