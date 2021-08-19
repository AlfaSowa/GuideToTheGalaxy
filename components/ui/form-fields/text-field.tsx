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
    <fieldset className={style.root}>
      <legend>{label}</legend>

      <label className={style.root__label}>
        <input name={name} type={type} value={value} onChange={onChange} />
      </label>
    </fieldset>
  );
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
