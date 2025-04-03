import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components2/Navbar';
import Home from './components2/Home';
import Dashboard from './components2/Dashboard';
import DataProvider from './context/UseContext';
import AddNote from './components2/AddNote';

const App = () => {
  return (
    <DataProvider>
  
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-note" element={<AddNote />} />
        </Routes>
    
    </DataProvider>
  );
};

export default App;