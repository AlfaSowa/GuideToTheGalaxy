/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import clsx from "clsx";
import { ChangeEvent } from "react";
import styles from "./fields.module.scss";

interface TextFieldProps {
  name: string;
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: any;
  placeholder: string;
}

function Checkbox({
  name,
  value,
  onChange,
  errors,
  placeholder,
}: TextFieldProps): JSX.Element {
  return (
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
}

export default Checkbox;
