import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from "./components/Navbar/Navbar";
import Login from './pages/Login';
import MenPage from "./pages/Menpage/MenPage"
import Shoes from './pages/Productspage/Shoes';

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/menpage" element={ <MenPage/> } />
          <Route path='/products/shoes' element={<Shoes/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
