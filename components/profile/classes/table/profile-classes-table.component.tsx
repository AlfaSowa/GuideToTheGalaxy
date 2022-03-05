import { useRouter } from "next/router";
import { FC } from "react";
import { useClasses } from "../../../../hooks/classes/useClasses";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableСell,
} from "../../../lib/table/table.component";
import Button from "../../../ui/button/button.component";

const ProfileClassesTable: FC = () => {
  const router = useRouter();
  const { classes } = useClasses();

  const addNewClass = () => {
    router.push("/profile/classes/new");
  };

  console.log("classes", classes);

  return (
    <div>
      <div>
        <Button onClick={addNewClass}>Добавить новый класс</Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableСell>Название</TableСell>
            <TableСell>Кость Хитов</TableСell>
            <TableСell>Хиты на 1 уровне</TableСell>
            <TableСell>Хиты на следующих уровнях</TableСell>
          </TableRow>
        </TableHead>

        <TableBody>
          {classes.map((item) => (
            <TableRow key={item._id}>
              <TableСell>{item.name}</TableСell>
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
