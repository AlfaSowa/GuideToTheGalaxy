/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import clsx from "clsx";
import { ChangeEvent, FC } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import styles from "./fields.module.scss";

interface TextFieldProps {
  name?: string;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  label?: boolean;
  errors?: any;
  placeholder?: string;
}

const Checkbox: FC<TextFieldProps> = ({
  name,
  value,
  onChange,
  checked,
  errors,
  placeholder,
  label,
}) => (
  <>
    {label && (
      <label
        className={clsx(styles.root, {
          [styles.error]: errors && errors[name],
        })}
        aria-label={name}
      >
        <input
          className={styles.root__checkbox}
          name={name}
          type="checkbox"
          value={value}
          onChange={onChange}
          checked={checked}
        />

        {placeholder && <span>{placeholder}</span>}
      </label>
    )}

    {!label && (
      <span className={styles.root}>
        <input
          className={styles.input}
          data-name={name}
          type="checkbox"
          value={value}
          onChange={onChange}
          checked={checked}
        />
        {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      </span>
    )}
  </>
);

Checkbox.defaultProps = {
  placeholder: null,
  errors: null,
  onChange: null,
  value: null,
  name: null,
  label: false,
};

export default Checkbox;
