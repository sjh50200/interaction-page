import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import MainPage from '@/pages/Main';
import SecondMockup from '@/pages/Second';
import FakeUrl from '@/pages/FakeUrl';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/main" />} /> */}
          <Route path="/" element={<SecondMockup />} />
          <Route path="/fake-url" element={<FakeUrl />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
