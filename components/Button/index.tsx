import React, { FC } from "react";

interface ButtonProps {
  mode?: "outline" | "text" | "solid";
  upperCase?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  mode,
  upperCase,
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
      className={`bg-transparent text-sm rounded-lg font-bold hover:opacity-70 focus:outline-none ${getStyle()}`}
    >
      {label}
    </button>
  );
};

export default Button;
