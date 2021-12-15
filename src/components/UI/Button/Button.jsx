import React from 'react';
import { MainButton } from './button.style';

export const Button = ({ children, ...props }) => (
  <MainButton {...props}>
    {children}
  </MainButton>
);
