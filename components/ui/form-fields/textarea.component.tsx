import clsx from 'clsx';
import { ChangeEvent } from 'react';
import styles from './fields.module.scss';

interface TextAreaProps {
  name: string;
  value: any;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  errors: any
}

const TextArea = ({
  name,
  value,
  placeholder,
  onChange,
  errors,
}: TextAreaProps): JSX.Element => {
  return (
    <label className={clsx(styles.root, { [styles.error]: errors && errors[name] })}>
      <span className={clsx(styles.root__title, { [styles.root__title__active]: value })}>{placeholder}</span>

      <textarea
        className={styles.root__textarea}
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
      />
    </label>
  );
};

export default TextArea;
