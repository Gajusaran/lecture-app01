import React from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import Courses from './component/Courses/Courses';
import Header from './component/Layout/Header/Header';
import Footer from './component/Layout/Footer/Footer';
import Login from './component/Auth/login';
import Register from './component/Auth/register';
import Forgotpassword from './component/Auth/forgotpassword';
import Resetpassword from './component/Auth/Resetpassword';
import Contact from './component/contact/Contact';
import Request from './component/request/request';
import About from './component/About/About';
import Subscribe from './component/payment/subscribe';
import Notfound from './component/Layout/Notfound/Notfound';
import Paymentfail from './component/payment/paymentfail';
import Paymentsucess from './component/payment/paymentsucess';

function App(){
  return(
  <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>  /* Define routes */
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
          <Route path="/resetpassword/:token" element={<Resetpassword/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/request" element={<Request/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
          <Route path="/paymentfail" element={<Paymentfail/>}></Route>
          <Route path="/paymentsucess" element={<Paymentsucess/>}></Route>
          <Route path="/subscribe" element={<Subscribe/>}></Route>
        </Routes>
        <Footer/>
    </Router>
    );
}

export default App;
