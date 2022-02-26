/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FormikErrors } from "formik";
import { ChangeEvent } from "react";
import styles from "./fields.module.scss";

interface TextFieldProps {
  name: string;
  type?: "text" | "password";
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: FormikErrors<any>;
}

function TextField({
  name,
  type,
  value,
  placeholder,
  onChange,
  errors,
}: TextFieldProps): JSX.Element {
  return (
    <label
      className={clsx(styles.root, { [styles.error]: errors && errors[name] })}
    >
      <span
        className={clsx(styles.root__title, {
          [styles.root__title__active]: value,
        })}
      >
        {placeholder}
      </span>

      <input
        className={styles.root__input}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

TextField.defaultProps = {
  type: "text",
};

export default TextField;
