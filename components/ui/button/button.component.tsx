/* eslint-disable react/button-has-type */
import clsx from "clsx";
import { FC, ReactNode } from "react";
import style from "./styles.module.scss";

interface IButton {
  type?: JSX.IntrinsicElements["button"]["type"];
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: FC<IButton> = ({
  type,
  children,
  variant,
  disabled,
  fullWidth,
  onClick,
}) => (
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
