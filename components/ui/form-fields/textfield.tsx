/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx';
import { ChangeEvent } from 'react';
import style from './fields.module.scss';

interface TextFieldProps {
  name: string;
  type?: 'text' | 'password';
  value: any;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: any
}

const TextField = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  errors,
}: TextFieldProps): JSX.Element => {
  return (
    <label className={clsx(style.root, { [style.error]: errors && errors[name] })}>
      <input
        className={style.root__input}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
