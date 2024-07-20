'use client';

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  bgColor: string;
  textColor: string;
  width: string;
  height: string;
  className?: string;
}

const Button = ({
  children,
  bgColor,
  textColor,
  width,
  height,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${width} ${height} ${className}`}
      onClick={() => {}}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
