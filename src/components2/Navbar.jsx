import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">My App</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/add-note">Add Note</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;