import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import MainPage from '@/pages/Main';
import SecondMockup from '@/pages/Second';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/" element={<Navigate to="/main" />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/second" element={<SecondMockup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
