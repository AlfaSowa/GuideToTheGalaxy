import { ReactNode } from "react";

interface CroupCheckboxesProps {
  children: ReactNode;
}

function CroupCheckboxes({ children }: CroupCheckboxesProps): JSX.Element {
  return <div>{children}</div>;
}

export default CroupCheckboxes;
