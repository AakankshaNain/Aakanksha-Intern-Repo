import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-blue-500">This is the Profile Page!!!</h1>
      <button className="mt-4 px-4 py-2 bg-gray-300 text-blue-900 rounded-md" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}

export default Profile;