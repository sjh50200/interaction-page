import styled from 'styled-components';
import { ButtonProps } from '.';

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.primary ? 'cornflowerblue' : 'palevioletred'};
`;
