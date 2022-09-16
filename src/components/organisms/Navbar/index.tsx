import * as S from './style';
import React from 'react';
import NavBarItems from '@/components/molecules/NavBarItems';

const NavBar: React.FC = () => {
  return (
    <S.Header>
      <S.Container>
        <div>logo</div>
        <NavBarItems />
      </S.Container>
    </S.Header>
  );
};

export default NavBar;
