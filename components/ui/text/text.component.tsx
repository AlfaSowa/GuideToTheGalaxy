import { ReactNode } from 'react';

interface CustomTextProps {
  children: ReactNode;
  component?: 'span' | 'p';
  className?: string;
}

const CustomText = ({
  children,
  component,
  className,
}: CustomTextProps): JSX.Element => {
  const getComponent = () => {
    switch (component) {
      case 'p':
        return <p className={className}>{children}</p>;
      default:
        return <span className={className}>{children}</span>;
    }
  };

  return getComponent();
};

CustomText.defaultProps = {
  component: 'span',
  className: null,
};

export default CustomText;
