import React from 'react';
import { StyledButton } from './style';

export interface ButtonProps {
  children?: string;
  primary: boolean;
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  const { children, primary } = props;
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default CustomButton;
