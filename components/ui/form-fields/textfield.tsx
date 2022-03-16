/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FormikErrors } from "formik";
import { ChangeEvent, FC } from "react";
import styles from "./fields.module.scss";

interface TextFieldProps {
  name: string;
  type?: "text" | "password";
  value?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors: FormikErrors<any>;
}

const TextField: FC<TextFieldProps> = ({
  name,
  type,
  value,
  placeholder,
  onChange,
  errors,
}) => (
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

TextField.defaultProps = {
  type: "text",
  value: null,
};

export default TextField;
