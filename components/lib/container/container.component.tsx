import clsx from 'clsx';
import styles from './container.module.scss';

interface ContainerProps {
  children: any;
  alignCenter?: boolean;
}

const Container = ({ children, alignCenter }: ContainerProps) => (
    <div
      className={clsx(styles.root, { [styles.root__aligncenter]: alignCenter })}
    >
      {children}
    </div>
  );

Container.defaultProps = {
  alignCenter: false,
};
export default Container;
