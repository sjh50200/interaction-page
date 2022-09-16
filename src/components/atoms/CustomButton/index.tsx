import React from 'react';
import { StyledButton } from './style';

export interface ButtonProps {
  children?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string | null;
  // primary: boolean;
}

const CustomButton: React.FC<ButtonProps> = (props) => {
  const { children, onClick, className } = props;
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

CustomButton.defaultProps = {
  className: null,
};

export default CustomButton;
