/* eslint-disable react/button-has-type */
import clsx from "clsx";
import { ReactNode } from "react";
import style from "./button.module.scss";

interface ButtonProps {
  type?: JSX.IntrinsicElements["button"]["type"];
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button = ({
  type,
  children,
  variant,
  disabled,
  fullWidth,
  onClick,
}: ButtonProps): JSX.Element => (
  <button
    className={clsx(style.btn, style[`btn__${variant}`], {
      [style.btn__disabled]: disabled,
      [style.btn__fullwidth]: fullWidth,
    })}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: "button",
  variant: "primary",
  disabled: false,
  fullWidth: false,
  onClick: null,
};

export default Button;
