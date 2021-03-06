import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
import Profile from '@pages/Profile';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
