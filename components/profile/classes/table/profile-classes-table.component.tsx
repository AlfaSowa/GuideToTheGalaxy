import { MouseEvent, FC, useState } from "react";
import { useClasses } from "../../../../hooks/classes/useClasses";
import { IClass } from "../../../../interfaces/classes";
import { Checkbox } from "../../../lib/form/form-fields";
import {
  Table,
  TableBody,
  TableEnhancedToolbar,
  TableHead,
  TableRow,
  TableСell,
} from "../../../lib/table";

const CHECKBOX_NAME = "checkbox-aria";

const ProfileClassesTable: FC = () => {
  const { classes, setShortClassDetails } = useClasses();
  const [selected, setSelected] = useState<string[]>([]);

  const rowHandleClick = (e: MouseEvent<HTMLTableRowElement>, row: IClass) => {
    if ((e.target as HTMLTableRowElement)?.dataset?.name === CHECKBOX_NAME) {
      const selectedIndex = selected.find((i) => i === row.name);
      if (selectedIndex) {
        setSelected((prev) => prev.filter((i) => i !== row.name));
      } else {
        setSelected((prev) => [...prev, row.name]);
      }
    } else {
      setShortClassDetails(row);
    }
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <div>
      <TableEnhancedToolbar numSelected={selected.length} />

      <Table>
        <TableHead>
          <TableRow>
            <TableСell component="th" scope="col">
              1
            </TableСell>
            <TableСell component="th" scope="col">
              Название
            </TableСell>
            <TableСell component="th" scope="col">
              Кость Хитов
            </TableСell>
            <TableСell component="th" scope="col">
              Хиты на 1 уровне
            </TableСell>
            <TableСell component="th" scope="col">
              Хиты на следующих уровнях
            </TableСell>
          </TableRow>
        </TableHead>

        <TableBody>
          {classes.map((item) => (
            <TableRow
              onClick={(e) => rowHandleClick(e, item)}
              hover
              key={item._id}
            >
              <TableСell component="th">
                <Checkbox
                  checked={isSelected(item.name)}
                  name={CHECKBOX_NAME}
                />
              </TableСell>
              <TableСell component="th">{item.name}</TableСell>
              <TableСell>{item.hits}</TableСell>
              <TableСell>{item.hitsOnFirstLvl}</TableСell>
              <TableСell>{item.hitsOnNextLvl}</TableСell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProfileClassesTable;
