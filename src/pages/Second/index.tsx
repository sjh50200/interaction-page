import { useYScroll } from '@/hooks/useScroll';
import React, { useEffect, useState } from 'react';
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
    // console.log(scrollY);
    // console.log(window.innerHeight * 0.4);
    console.log(2.5 * window.innerHeight - scrollY);
    if (scrollY >= 400) setSecondItem(true);
    if (scrollY >= 700) setThirdItem(true);
  }, [scrollY]);

  //   height는 언제 나타날지를
  return (
    <S.Wrapper>
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
      {/* <S.Background
        position={position}
        deviceHeight={window.innerHeight * 0.7}
        className="second-item"
      >
        <S.Text>Hello world</S.Text>
      </S.Background>
      <S.Background
        position={position}
        style={{ opacity: (position - 250) / 100 }}
      >
        Duis aute irure dolor
      </S.Background>
      <S.Background position={position}>
        Lorem ipsum dolor sit amet
      </S.Background>
      <S.Background position={position}>Excepteur sint occaecat</S.Background>
      <S.Background position={position}>
        sunt in culpa qui officia deserunt
      </S.Background> */}
      {/* <Image />
      <Image /> */}
    </S.Wrapper>
  );
};

export default SecondMockup;
