
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
import NotFund from './Compontes/Notfund/NotFund';
import Register from './Compontes/Login/Register';
import Cheackout from './Compontes/Checkout/Cheackout';
import RequireAuth from './Compontes/Login/RequireAuth/RequireAuth';
import About from './Compontes/About/About';
import Logins from './Compontes/Login/Logins';




function App() {
  return (
  <div> 
    <Header></Header>
  
  <Routes> 
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/services' element={<Services></Services>}></Route>
    <Route path='/services/:serviceId' element={<ServicesDetails></ServicesDetails>}></Route>
    <Route path='/checkout' element={
     <RequireAuth><Cheackout></Cheackout></RequireAuth>

    }></Route>
    <Route path='experts' element={<Experts></Experts>}></Route>
   <Route path='/blog' element={<Bloge></Bloge>}></Route>
   {/* <Route path='/login' element={<Login></Login>}></Route> */}
   <Route path='/login' element={<Logins></Logins>}></Route>
   <Route path='register' element={<Register></Register>}></Route>
   <Route path='/about' element={<About></About>}></Route>
   <Route path="*" element={<NotFund></NotFund>}></Route>
  </Routes>
  <Footer></Footer>
  </div>
      
  );
}

export default App;
