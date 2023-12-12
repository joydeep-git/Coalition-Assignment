import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import "./App.css";

// PAGES & COMPONENTS
import Home from './Pages/Home';
import History from './Pages/History';
import Team from './Pages/Team';
import Header from './Components/Header';

const App = () => {
  return (
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;