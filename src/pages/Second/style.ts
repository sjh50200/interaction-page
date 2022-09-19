import styled, { css } from 'styled-components';
import background from '@/images/snow.gif';

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 1000%;
`;

export const Background1 = styled.div<{
  position: number;
  deviceHeight: number;
}>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 3rem;
  ${(props) =>
    props.position < 6 * props.deviceHeight &&
    css`
      background-image: url(${background});
      background-repeat: no-repeat;
      background-size: cover;
      opacity: ${(5 * props.deviceHeight - props.position) / 500};
    `}/* background-color: green; */
`;
/* ${(props) =>
props.position >= 2.2 * props.deviceHeight &&
props.position < 2.5 * props.deviceHeight &&
css`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: ${2.5 * props.deviceHeight - props.position}%;
`} */
/* transform: rotateX(${2.5 * props.deviceHeight - props.position} / 100); */
/* animation: ${fadeIn} 2s; */

export const Text = styled.span<{
  className: string;
  position: number;
  height: number;
  deviceHeight: number;
}>`
  text-align: center;
  color: white;
  opacity: ${(props) => {
    switch (props.className) {
      case 'first-text':
        return (props.height - props.position) / 500;
      case 'second-text': {
        if (props.position < 3 * props.deviceHeight)
          return (props.position - props.height) / 500;
        else return (5 * props.deviceHeight - props.position) / 500;
      }
      case 'third-text': {
        if (props.position < 4 * props.deviceHeight)
          return (props.position - props.height) / 500;
        else return (5 * props.deviceHeight - props.position) / 500;
      }
      default:
        return 0;
    }
  }};
  margin-top: ${(props) => {
    if (props.height < props.position) {
      switch (props.className) {
        case 'second-text': {
          return 50 - (props.position - props.height) / 20 > 0
            ? 50 - (props.position - props.height) / 20
            : 0;
        }
        case 'third-text': {
          return 50 - (props.position - props.height) / 20 > 0
            ? 50 - (props.position - props.height) / 20
            : 0;
        }
        default:
          return 0;
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
