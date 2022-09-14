import CustomButton from '@/components/atoms/CustomButton';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/', { replace: true });
  // }, []);

  return (
    <>
      <div>hello</div>
      <CustomButton primary={true}>hello</CustomButton>
    </>
  );
};

export default MainPage;
