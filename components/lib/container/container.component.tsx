import styles from './container.module.scss';

interface ContainerProps {
  children: any;
  className?: any;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${styles.container} ${className ? className : ''}`}>
      {children}
    </div>
  );
};
export default Container;
