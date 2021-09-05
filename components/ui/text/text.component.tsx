import clsx from 'clsx';
import { createElement, ReactNode } from 'react';
import styles from './text.module.scss';

interface CustomTextProps {
  children: ReactNode;
  component?: 'span' | 'p';
  className?: string;
  variant?: 'text' | 'subtext';
  darkMode?: boolean;
}

const CustomText = ({
  children,
  component,
  className,
  darkMode,
  variant,
}: CustomTextProps): JSX.Element => {
  return createElement(
    component,
    {
      className: clsx(
        styles.root,
        { [styles.root__dark]: darkMode },
        { [className]: className },
        { [variant]: variant },
      ),
    },
    children,
  );
};

CustomText.defaultProps = {
  component: 'span',
  className: null,
  variant: null,
  darkMode: false,
};

export default CustomText;
