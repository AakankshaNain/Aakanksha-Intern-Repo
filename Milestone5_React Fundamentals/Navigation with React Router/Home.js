import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-blue-500">This is the HomePage!!!</h1>
      <Link to="/Profile" className="mt-4 px-4 py-2 bg-gray-300 text-blue-900 rounded-md inline-block">
        {/**inline-block wrap the element to prevent the text inside from extending beyond its parent */}
        Go to Profile
      </Link>
    </div>
  );
}

export default Home;