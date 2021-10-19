import clsx from 'clsx';
import styles from './container.module.scss';

interface ContainerProps {
  children: any;
  alignCenter?: boolean;
  padding?: boolean;
}

const Container = ({ children, alignCenter, padding }: ContainerProps) => (
  <div
    className={clsx(styles.root, { [styles.root__aligncenter]: alignCenter }, { [styles.root__padding]: padding })}
  >
    {children}
  </div>
);

Container.defaultProps = {
  alignCenter: false,
  padding: false,
};

export default Container;
