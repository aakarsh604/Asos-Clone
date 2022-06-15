import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Link to={"/"}>Products</Link>
    <Link to={"/cart"}>Cart</Link>
    </div>
  )
}

export default Navbar