import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, children, px, color, onClick }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${color ? "text-n-8" : "text-n-1"} ${className}`;

  const spanClasses = `relative z-10`;
  const renderButton = () => (
    <button className={classes} onClick={onClick} >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(color)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(color)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
