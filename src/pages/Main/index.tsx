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
    if (scrollY >= 0 && scrollY < window.innerHeight * 0.7) {
      setFirstItem(true);
      setSecondItem(false);
      setThirdItem(false);
    } else if (
      scrollY >= window.innerHeight * 0.7 &&
      scrollY < window.innerHeight * 1.4
    ) {
      setFirstItem(false);
      setSecondItem(true);
      setThirdItem(false);
    } else if (
      scrollY >= window.innerHeight * 1.4 &&
      scrollY < window.innerHeight * 2.1
    ) {
      setFirstItem(false);
      setSecondItem(false);
      setThirdItem(true);
    } else {
      setFirstItem(false);
      setSecondItem(false);
      setThirdItem(false);
    }
  }, [scrollY]);

  return (
    <S.Wrapper>
      <NavBar />
      <S.Container sticky={firstItem || secondItem || thirdItem}>
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
