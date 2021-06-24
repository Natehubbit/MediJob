import React, { FC } from "react";

interface ButtonProps {
  mode?: "outline" | "text" | "solid";
  upperCase?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  mode,
  upperCase,
  className,
  onClick: onClicked,
}) => {
  const label =
    upperCase || upperCase == undefined
      ? (children as string).toUpperCase()
      : children;
  const getStyle = () => {
    if (!mode || mode === "outline") {
      return "border border-blue-500 px-5 py-2 text-blue-500";
    } else if (mode === "solid") {
      return "bg-blue-500 px-5 py-2 text-white";
    } else {
      return "hover:text-blue-500";
    }
  };
  return (
    <button
      onClick={onClicked && onClicked}
      className={`bg-transparent overflow-ellipsis whitespace-nowrap text-sm rounded-lg font-bold hover:opacity-70 focus:outline-none ${getStyle()} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
