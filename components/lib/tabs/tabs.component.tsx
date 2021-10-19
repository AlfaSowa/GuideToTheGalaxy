/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { style } from '@mui/system';
import clsx from 'clsx';
import Link from 'next/link';
import {
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import styles from './tabs.module.scss';

interface CustomTabsProps {
  children: ReactNode;
}

interface TabsProps {
  children: ReactElement[];
  onChange: any;
  value: any;
}

interface TabProps {
  value: any;
  children: ReactNode;
  onChange?: any
  valueFocused?: any
}

interface TabsPanelProps {
  value: any;
  children: ReactNode;
  index: any;
}

export const CustomTabs = ({ children }: CustomTabsProps): JSX.Element => {
  return <div>{children}</div>;
};

export const Tabs = ({ children, onChange, value }: TabsProps): JSX.Element => {
  return (
    <div className={styles.tabs}>
      {children.map((i) => ({
        ...i,
        props: {
          ...i.props,
          onChange,
          valueFocused: value,
        },
      }))}
    </div>
  );
};

export const Tab = ({ value, children, onChange, valueFocused }: TabProps): JSX.Element => {
  return (
    <div className={clsx({ [styles.focused]: valueFocused === value })} onClick={() => onChange(value)}>{children}</div>
  );
};

export const TabsPanel = ({
  children,
  index,
  value,
}: TabsPanelProps): JSX.Element => {
  return value === index && <div>{children}</div>;
};
