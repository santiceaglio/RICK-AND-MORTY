import './App.css';
import {Routes, Route} from "react-router-dom";
import FavoritesPage from './views/FavoritesPage';
import DetailPage from './views/DetailPage';
import HomePage from './views/HomePage';
import LandingPage from './views/LandingPage';
import About from './views/About';
import Nav from "./components/Nav"
import ErrorPage from "./views/ErrorPage"
import { useLocation } from 'react-router-dom';

import axios from "axios";

const desarrolloApp = "http://localhost:3001";
const produccionApp = "";
axios.defaults.baseURL= desarrolloApp;

function App() {

  const {pathname}=useLocation();

  const verificarRutas=()=>{
    switch(pathname){
      case "/": return false
      case "/home":return true
      case "/about": return true
      case "/favorite": return true
      case "/detail/:id": return false
      default: return false
    }
  }
  return (
    <div className="App">

      {verificarRutas() && <Nav />}
      
      

      <Routes>
        
        <Route  path="/" element={<LandingPage/>}/>
        <Route  path="/home" element={<HomePage/>}/>
        <Route  path="/favorite" element={<FavoritesPage/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="*" element={<ErrorPage />} />




      </Routes>
    </div>
  );
}

export default App;
