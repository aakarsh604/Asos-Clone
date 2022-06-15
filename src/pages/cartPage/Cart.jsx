import React, { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { getItemApi } from '../../store/cart/cart.actions';
import { Alert, AlertIcon, Progress, Stack } from '@chakra-ui/react'
import CartItem from './CartItem';



const Cart = () => {
  const dispatch = useDispatch()
  const {data,getItemCart} = useSelector((state)=>state.cart)
useEffect(() => {
   dispatch(getItemApi())

  return () => {
    
  }
}, [])

if(data.length===0){
  return (<div>Your bag is empty</div>)
}
else{
  if(getItemCart.loading){
    return (<div><div>Loading...</div>
      <Progress size='xs' isIndeterminate />
    </div>)
  }else if(getItemCart.error){
    return (
      <div>
      <Stack spacing={3}>
  <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>
  </Stack>
      </div>
    )
  }
  return (
    <div>Cart
      <div>
        {data.map((el)=>(
          <CartItem key={el.id} item={el} />
        ))}
      </div>
    </div>
  )
}

 
}

export default Cart