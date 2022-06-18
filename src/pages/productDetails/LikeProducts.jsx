import "./dataSlide.css";
import {Link, useLocation} from "react-router-dom"
const LikeProducts = ({item}) => {
    const location = useLocation()
    let from = {
        pathname:location.pathname
    }
  return (
       <div key={item.id} style={{marginRight : "10px", marginLeft : "10px"}}>
       <Link to={`/productdetails/${item.id}`} state={from}>
         <img src={`${item.Image}`} />
        <div className='sauravcardname1'>{item.Brand_Name}</div>
        <div className="sauravcardprice">{`£ ${item.Price}`}</div>
       </Link>
        
        </div>
  )
}

export default LikeProducts
