import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

export const StyledButton = styled.button<ButtonProps>`
  width: 5rem;
  font-size: 1.2rem;
  text-align: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: linear-gradient(to right, #00ff00 0%, #00e5ff 100%);
  ${(props) =>
    props.className === 'first-mock' &&
    css`
      margin: 8rem auto 0 auto;
      margin-left: calc((100% - 5rem) / 2);
      -webkit-transform: scale(1.5);
    `}
`;

// background-color: ${(props) =>
//   props.primary ? 'cornflowerblue' : 'palevioletred'};
