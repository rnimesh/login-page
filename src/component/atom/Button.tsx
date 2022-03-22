import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
};

export const Button: React.FC<ButtonProps> = (Props) => {
  return (
    <button
      className=" w-[75px] h-[36px] flex flex-row justify-center items-center left-[325px]rounded-[3px] px-3 py-2  bg-[#00598D] text-white text-base leading-4 font-medium tracking-[-0.18px]"
      onClick={Props.handleClick}
    >
      {Props.title}
    </button>
  );
};

export default Button;
