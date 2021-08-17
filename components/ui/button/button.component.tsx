import style from './button.module.scss';

const Button = ({ text }): JSX.Element => {
  return <button className={style.button}>{text}</button>;
};

export default Button;
