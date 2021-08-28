import { ChangeEvent } from 'react';
import style from './fields.module.scss';

interface TextFieldProps {
  name: string;
  type?: 'text' | 'password';
  value: any;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  name,
  type,
  value,
  label,
  onChange,
}: TextFieldProps): JSX.Element => {
  return (
    <label className={style.root}>
      <input
        className={style.root__input}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </label>
  );
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
