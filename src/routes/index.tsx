import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import MainPage from '@/pages/Main';
import SecondMockup from '@/pages/Second';

const Router = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/main" />} /> */}
          <Route path="/" element={<SecondMockup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default Router;
