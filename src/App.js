import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from "./components/Navbar/Navbar";
import Login from './pages/Login';
import MenPage from "./pages/Menpage/MenPage"

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/menpage" element={ <MenPage/> } />
        </Routes>
    </div>
  );
}

export default App;
