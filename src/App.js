
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Compontes/Header/Header';
import Home from './Compontes/Home/Home';
import Services from './Compontes/Services/Services';
import Experts from './Compontes/Experts/Experts';
import Bloge from './Compontes/Bloge/Bloge';
import Login from './Compontes/Login/Login';
import Footer from './Compontes/Footer/Footer';
import ServicesDetails from './Compontes/ServicesDetails/ServicesDetails';




function App() {
  return (
  <div> 
    <Header></Header>
  
  <Routes> 
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/services' element={<Services></Services>}></Route>
    <Route path='/services/:serviceId' element={<ServicesDetails></ServicesDetails>}></Route>

    <Route path='experts' element={<Experts></Experts>}></Route>
   <Route path='/blog' element={<Bloge></Bloge>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>

  </Routes>
  <Footer></Footer>
  </div>
      
  );
}

export default App;
