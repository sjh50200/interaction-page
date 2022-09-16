import React from 'react';
import * as S from './style';

interface Props {
  children?: string;
  selected?: boolean;
  link: string;
}

const NavBarItem: React.FC<Props> = (props) => {
  const { children, selected, link } = props;
  return (
    <S.StyledLink to={link}>
      <S.MenuText selected={selected}>{children}</S.MenuText>
    </S.StyledLink>
  );
};

NavBarItem.defaultProps = {
  children: 'mock',
  selected: false,
};

export default NavBarItem;
