import React from 'react';
import * as S from './style';

const NotFound = () => {
  return (
    <S.Container>
      <S.Title>
        <p>404</p>
      </S.Title>
      <br />
      <S.Content>oops! you got the wrong page!</S.Content>
    </S.Container>
  );
};

export default NotFound;
