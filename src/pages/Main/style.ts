import { fadeIn } from '@/style/keyFrames';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300%;
`;
export const Container = styled.div<{ sticky: boolean }>`
  position: ${(props) => (props.sticky ? 'sticky' : 'static')};
  top: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: blueviolet;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  color: white;
  font-size: 3rem;
  animation: ${fadeIn} 2s;
`;
