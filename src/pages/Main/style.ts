import { fadeIn } from '@/style/keyFrames';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300%;
`;
/* top: ${(props) => `${7 * props.deviceHeight}px`}; */
export const Container = styled.div<{ deviceHeight: number; position: number }>`
  opacity: ${(props) => (props.position - 5 * props.deviceHeight) / 500};
  position: fixed;
  top: 0;
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
