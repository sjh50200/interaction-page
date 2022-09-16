import NavBarItem from '@/components/atoms/NavBarItem';
import React, { useCallback, useState } from 'react';
import * as S from './style';

const NavBarItems = () => {
  const [first, setFirst] = useState<boolean>(true);
  const [second, setSecond] = useState<boolean>(false);
  const [third, setThird] = useState<boolean>(false);
  const [fourth, setFourth] = useState<boolean>(false);

  const selectMenu = useCallback(
    (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setState(true);
    },
    [setFirst, setSecond, setThird, setFourth],
  );

  return (
    <S.Lists>
      <S.List onClick={() => selectMenu(setFirst)}>
        <NavBarItem selected={first} link="/">
          소개
        </NavBarItem>
      </S.List>
      <S.List onClick={() => selectMenu(setSecond)}>
        <NavBarItem selected={second} link="/">
          소개
        </NavBarItem>
      </S.List>
      <S.List onClick={() => selectMenu(setThird)}>
        <NavBarItem selected={third} link="/">
          소개
        </NavBarItem>
      </S.List>
      <S.List onClick={() => selectMenu(setFourth)}>
        <NavBarItem selected={fourth} link="/">
          소개
        </NavBarItem>
      </S.List>
    </S.Lists>
  );
};

export default NavBarItems;
