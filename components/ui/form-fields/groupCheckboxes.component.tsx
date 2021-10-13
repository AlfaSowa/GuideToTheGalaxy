import { ReactNode } from 'react';
import styles from './fields.module.scss';

interface CroupCheckboxesProps {
  children: ReactNode
}

const CroupCheckboxes = ({ children }: CroupCheckboxesProps): JSX.Element => {
  return (
    <div>{children}</div>
  );
};

export default CroupCheckboxes;
