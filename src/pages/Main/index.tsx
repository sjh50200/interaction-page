import CustomButton from '@/components/atoms/CustomButton';
import NavBar from '@/components/organisms/Navbar';
import { useYScroll } from '@/hooks/useScroll';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const MainPage = () => {
  const [firstItem, setFirstItem] = useState<boolean>(true);
  const [secondItem, setSecondItem] = useState<boolean>(false);
  const [thirdItem, setThirdItem] = useState<boolean>(false);
  const { scrollY } = useYScroll();
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollY > window.innerHeight * 5 && scrollY < window.innerHeight * 6) {
      setFirstItem(true);
      setSecondItem(false);
      setThirdItem(false);
    } else if (
      scrollY >= window.innerHeight * 6 &&
      scrollY < window.innerHeight * 7
    ) {
      setFirstItem(false);
      setSecondItem(true);
      setThirdItem(false);
    } else {
      setFirstItem(false);
      setSecondItem(false);
      setThirdItem(true);
    }
  }, [scrollY]);

  return (
    <S.Wrapper>
      <NavBar />
      <S.Container deviceHeight={window.innerHeight} position={scrollY}>
        {firstItem && (
          <S.Text>
            <p>HELLO</p>
          </S.Text>
        )}
        {secondItem && (
          <>
            <S.Text>
              <p>This is</p>
            </S.Text>
            <S.Text>
              <p>First Mockup</p>
            </S.Text>
          </>
        )}
        {thirdItem && (
          <S.Text>
            <p>css is js</p>
            <p>with animated</p>
            <CustomButton
              className="first-mock"
              onClick={() => navigate('/second')}
            >
              Next
            </CustomButton>
          </S.Text>
        )}
      </S.Container>
    </S.Wrapper>
  );
};

export default MainPage;
