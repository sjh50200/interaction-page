import styled, { css } from 'styled-components';
import { fadeIn } from '@/style/keyFrames';

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 1000%;
`;

export const Background1 = styled.div<{
  position: number;
}>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-size: 3rem;
  opacity: 1;
`;
/* animation: ${fadeIn} 2s; */

export const Text = styled.span<{
  className: string;
  position: number;
  height: number;
}>`
  text-align: center;
  opacity: ${(props) => {
    switch (props.className) {
      case 'first-text':
        return (props.height - props.position) / 500;
      case 'second-text': {
        if (props.position < 2000) return (props.position - props.height) / 500;
        else return (2000 - props.position) / 500;
      }
      case 'third-text': {
        if (props.position < 2000) return (props.position - props.height) / 500;
        else return (2000 - props.position) / 500;
      }
    }
  }};
`;

export const Grid = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  width: 50%;
  height: 30vh;
`;
