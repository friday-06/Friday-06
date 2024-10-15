import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl">Minecraft Hosting Platform</h1>
      <nav>
        <Link to="/" className="text-white mr-4">Home</Link>
        <Link to="/about" className="text-white mr-4">About</Link>
        <Link to="/login" className="text-white mr-4">Login</Link>
        <Link to="/signup" className="text-white">Signup</Link>
      </nav>
    </header>
  );
}

export default Header;
