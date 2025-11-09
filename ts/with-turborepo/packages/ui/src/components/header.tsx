import React from "react";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title, ...props }) => {
  return (
    <header {...props}>
      <h1 className="flex items-center justify-center">{title}</h1>
    </header>
  );
};
