import React from 'react'

const CartItem = ({item}) => {
  return (
    <div key={item.id}>
        <img src={item.Image} alt='cart'/>
        <p>{item.productName}</p>
        <p>{item.size}</p>
        <p>{`£${item.price}`}</p>
        <p>Qty{item.quantity}</p>
        <button>Remove</button>
    </div>
  )
}

export default CartItem