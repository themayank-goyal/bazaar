import React from 'react';
import Navbar from './componenets/Navbar';
import Login from './componenets/Login';
import MarketPlace from './componenets/MarketPlace';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/market-place' element={<MarketPlace />} />
      </Routes>
    </>
  );
};

export default App;
