/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import clsx from "clsx";
import {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./fields.module.scss";

interface SelectProps {
  name: string;
  value: any;
  placeholder: string;
  onChange: any;
  errors: any;
  children: ReactElement[];
}

const Select: FC<SelectProps> = ({
  name,
  value,
  placeholder,
  onChange,
  errors,
  children,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const ulRef = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (ulRef.current && !ulRef.current?.contains(e.target)) {
      setIsFocused(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isFocused) {
        window.addEventListener("mousedown", handleClickOutside);
      } else {
        window.removeEventListener("mousedown", handleClickOutside);
      }
    }

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isFocused]);

  return (
    <div
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
        type="text"
        value={value}
        onClick={() => setIsFocused(true)}
      />

      <ul
        className={clsx(styles.select, { [styles.focused]: isFocused })}
        ref={ulRef}
      >
        {children.map((i: ReactElement) => ({
          ...i,
          props: {
            ...i.props,
            onChange,
            setIsFocused,
            name,
          },
        }))}
      </ul>
    </div>
  );
};

export function SelectItem({
  children,
  onChange,
  value,
  name,
  setIsFocused,
}: any) {
  const handleClick = () => {
    onChange(name, value);
    setIsFocused(false);
  };
  return (
    <li className={styles.select__item} onClick={handleClick}>
      {children}
    </li>
  );
}

export default Select;
