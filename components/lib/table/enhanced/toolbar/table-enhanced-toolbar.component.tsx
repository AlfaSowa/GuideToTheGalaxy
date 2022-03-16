import { FC } from "react";

interface ITableEnhancedToolbar {
  numSelected: number;
}

export const TableEnhancedToolbar: FC<ITableEnhancedToolbar> = ({
  numSelected,
}) => (
  <div>
    {numSelected && <div>{numSelected}</div>}
    <div>TableEnhancedToolbar</div>
  </div>
);
