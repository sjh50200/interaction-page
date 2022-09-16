import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: aliceblue; */
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  height: 5vh;
  border: 1px solid white;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  min-width: 500px;
  border: 1px solid white;
`;
