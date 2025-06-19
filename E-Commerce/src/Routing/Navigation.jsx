import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Productdetails from '../pages/Productdetails';
import Home from '../pages/Home';
import Productpage from '../pages/productpage';
import Cartpage from '../pages/cartpage';

export default function Navigation() {
  return (
    <Routes>
      <Route path='/products/:id' element={<Productdetails/>} />
      <Route path="/" element={<Home/>}/>
      <Route path='Productpage' element={<Productpage/>} />
      <Route path='Cartpage' element={<Cartpage/>} />

    </Routes>
  );
}
