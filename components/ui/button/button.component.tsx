import clsx from 'clsx';
import style from './button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  variant?: 'primary' | 'second';
  disabled?: boolean;
}

const Button = ({
  type,
  text,
  variant,
  disabled,
}: ButtonProps): JSX.Element => {
  const setVariant = () => {
    switch (variant) {
      case 'primary':
        return style.btn__primary;

      case 'second':
        return style.btn__second;

      default:
        return null;
    }
  };

  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(style.btn, setVariant(), {
        [style.btn__disabled]: disabled,
      })}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  disabled: false,
};

export default Button;
