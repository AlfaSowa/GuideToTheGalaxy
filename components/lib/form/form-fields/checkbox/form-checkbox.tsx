import { ChangeEvent, FC } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

interface ICheckbox {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  name: string;
}

export const Checkbox: FC<ICheckbox> = ({ onChange, checked, name }) => (
  <span>
    <input
      data-name={name}
      type="checkbox"
      onChange={onChange}
      checked={checked}
    />
    {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
  </span>
);

Checkbox.defaultProps = {
  onChange: null,
};
