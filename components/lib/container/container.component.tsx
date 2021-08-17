import styles from './container.module.scss';
interface ContainerProps {
  children: any;
}

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.root}>{children}</div>;
};
export default Container;
