
import './App.css';
import Home from './pages/Home';
import Navigation from "./components/Navbar/Navbar";
import Login from './pages/Login';
import MenPage from "./pages/Menpage/MenPage"
import {Routes,Route} from "react-router-dom"
import ProductDetails from './pages/productDetails/ProductDetails';
import Products from './pages/productDetails/Products';
import Cart from './pages/cartPage/Cart';
function App() {
  return (
    <div className="App">
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/menpage" element={ <MenPage/> } />
          <Route path='/products' element={ <Products/>}/>
        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;
