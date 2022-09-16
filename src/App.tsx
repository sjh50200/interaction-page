import React from 'react';
import Router from '@/routes';
import GlobalStyle from './style/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
