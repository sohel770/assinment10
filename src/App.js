
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Compontes/Header/Header';
import Home from './Compontes/Home/Home';
import Services from './Compontes/Services/Services';
import Experts from './Compontes/Experts/Experts';
import Bloge from './Compontes/Bloge/Bloge';
import Login from './Compontes/Login/Login';




function App() {
  return (
  <div> 
    <Header></Header>
  
  <Routes> 
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/services' element={<Services></Services>}></Route>
    <Route path='experts' element={<Experts></Experts>}></Route>
   <Route path='/blog' element={<Bloge></Bloge>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>

  </Routes>
  
  </div>
      
  );
}

export default App;
