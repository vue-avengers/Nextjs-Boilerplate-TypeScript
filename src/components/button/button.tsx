import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, type }) => {
  return (
    <div className="button-wrapper">
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
