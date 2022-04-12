import { ChangeEvent, FC } from "react";
import styles from "./styles.module.scss";

interface ITextField {
  value: string;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<ITextField> = ({
  value,
  placeholder,
  onChange,
  name,
}) => (
  <div className={styles.root}>
    <label className={styles.label} htmlFor={name}>
      {placeholder}
    </label>

    <input
      className={styles.input}
      value={value}
      name={name}
      id={name}
      onChange={onChange}
    />
  </div>
);
