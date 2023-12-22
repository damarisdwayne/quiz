import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: (e: any) => void;
}

const Button = (props: ButtonProps) => {
  const renderButton = () => {
    return (
      <button
        className="bg-violet-400 rounded-lg font-extralight text-xl px-5 py-3 mt-10 pointer transition-all ease-in-out duration-200 hover:scale-110"
        onClick={props?.onClick}
      >
        {props.label}
      </button>
    );
  };
  return props.href ? (
    <Link href={props.href}>{renderButton()}</Link>
  ) : (
    renderButton()
  );
};

export default Button;
