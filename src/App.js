
import './App.css';
import Navigation from "./components/Navbar/Navbar";
import Login from './pages/Login/Login';
import MenPage from "./pages/Menpage/MenPage"
import { Routes, Route } from "react-router-dom"
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cartPage/Cart';
import Shoes from './pages/Productspage/Shoes';
import MensClothing from './pages/Productspage/MensClothing'
import WomensClothing from './pages/Productspage/WomensClothing'
import Footer from './components/footer/Footer';
import WomenPage from './pages/Womenpage/WomenPage';
import Homepage from './pages/Home/Homepage';
import Checkout from './pages/Checkoutpage/Checkout';
import RequiredAuth from "./hoc/RequiredAuth"
import Errorpage from './pages/Error/Errorpage';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails />} />
        <Route path='/cart' element={
         <RequiredAuth>
            <Cart />
         </RequiredAuth>
        } />
        <Route path='/products/shoes' element={<Shoes />}></Route>
        <Route path='/products/mensclothing' element={<MensClothing />}></Route>
        <Route path='/products/womensclothing' element={<WomensClothing />}></Route>
        <Route path='/checkoutpage' element={<Checkout />} />
        <Route path='/*' element={<Errorpage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
