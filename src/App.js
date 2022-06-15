
import './App.css';
import {Routes,Route} from "react-router-dom"
import ProductDetails from './pages/productDetails/ProductDetails';
import Products from './pages/productDetails/Products';
import Navbar from './components/Navbar';
import Cart from './pages/cartPage/Cart';
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/' element={ <Products/>}/>
        <Route path='/productDetails/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>



    </div>
  );
}

export default App;
