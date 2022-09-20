import { useYScroll } from '@/hooks/useScroll';
import React, { useEffect, useState } from 'react';
import MainPage from '../Main';
import * as S from './style';

const SecondMockup = () => {
  const [firstItem, setFirstItem] = useState<boolean>(true);
  const [secondItem, setSecondItem] = useState<boolean>(false);
  const [thirdItem, setThirdItem] = useState<boolean>(false);
  const [fourthItem, setFourthItem] = useState<boolean>(false);
  const { scrollY } = useYScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(scrollY);
    // console.log(window.innerHeight * 0.4);
    // console.log(2.5 * window.innerHeight - scrollY);
    if (scrollY < window.innerHeight * 5) {
      setFirstItem(true);
      setSecondItem(true);
      setThirdItem(true);
      setFourthItem(false);
    } else {
      setFirstItem(false);
      setSecondItem(false);
      setThirdItem(false);
      setFourthItem(true);
    }
  }, [scrollY]);

  //   height는 언제 나타날지를
  return (
    <S.Wrapper>
      {fourthItem ? (
        <MainPage />
      ) : (
        <S.Background1 position={scrollY} deviceHeight={window.innerHeight}>
          {firstItem && (
            <S.Text
              position={scrollY}
              height={window.innerHeight}
              deviceHeight={window.innerHeight}
              className="first-text"
            >
              Hello
            </S.Text>
          )}
          {secondItem && (
            <S.Grid>
              <S.Text
                className="second-text"
                position={scrollY}
                height={window.innerHeight * 2}
                deviceHeight={window.innerHeight}
              >
                My name is
              </S.Text>
              {thirdItem && (
                <S.Text
                  className="third-text"
                  position={scrollY}
                  height={window.innerHeight * 3}
                  deviceHeight={window.innerHeight}
                >
                  cobe
                </S.Text>
              )}
            </S.Grid>
          )}
        </S.Background1>
      )}
    </S.Wrapper>
  );
};

export default SecondMockup;
