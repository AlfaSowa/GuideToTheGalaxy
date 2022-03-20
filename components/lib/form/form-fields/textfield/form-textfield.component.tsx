import { ChangeEvent, FC } from "react";

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
  <label>
    <span>{placeholder}</span>

    <input value={value} name={name} onChange={onChange} />
  </label>
);
