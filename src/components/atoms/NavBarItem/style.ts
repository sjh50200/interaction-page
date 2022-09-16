import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 5em;
  height: 100%;
  line-height: 20px;
  ::after {
    text-decoration: none;
  }
`;

export const MenuText = styled.span<{ selected: boolean }>`
  /* border: 2px solid black; */
  color: white;
  font-size: 1.2rem;
  padding: 0.3em;
  ${(props) =>
    props.selected &&
    css`
      border-bottom: 2px solid white;
      margin-top: 2px;
    `};
  :hover {
    border-bottom: 2px solid white;
    margin-top: 2px;
  }
`;
