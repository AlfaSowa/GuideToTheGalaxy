/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import clsx from "clsx";
import { ChangeEvent, FC } from "react";
import styles from "./fields.module.scss";

interface TextFieldProps {
  name: string;
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: any;
  placeholder: string;
}

const Checkbox: FC<TextFieldProps> = ({
  name,
  value,
  onChange,
  errors,
  placeholder,
}) => (
  <label
    className={clsx(styles.root, { [styles.error]: errors && errors[name] })}
  >
    <input
      className={styles.root__checkbox}
      name={name}
      type="checkbox"
      value={value}
      onChange={onChange}
    />

    <span>{placeholder}</span>
  </label>
);

export default Checkbox;
