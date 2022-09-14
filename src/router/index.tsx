import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from '@/pages';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Navigate to="/main" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
