/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import clsx from "clsx";
import { ReactElement, ReactNode } from "react";
import styles from "./tabs.module.scss";

interface CustomTabsProps {
  children: ReactNode;
}

interface TabsProps {
  children: ReactElement[];
  onChange: (value: any) => void;
  value: any;
}

interface TabProps {
  value: string;
  children: ReactNode;
  onChange?: (value: string) => void;
  valueFocused?: any;
}

interface TabsPanelProps {
  value: any;
  children: ReactNode;
  index: any;
}

export function CustomTabs({ children }: CustomTabsProps): JSX.Element {
  return <div>{children}</div>;
}

export function Tabs({ children, onChange, value }: TabsProps): JSX.Element {
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
}

export function Tab({
  value,
  children,
  onChange,
  valueFocused,
}: TabProps): JSX.Element {
  return (
    <div
      className={clsx(styles.tab, { [styles.focused]: valueFocused === value })}
      onClick={() => onChange(value)}
    >
      {children}
    </div>
  );
}

Tab.defaultProps = {
  onChange: null,
  valueFocused: null,
};

export function TabsPanel({
  children,
  index,
  value,
}: TabsPanelProps): JSX.Element {
  return value === index && <div>{children}</div>;
}
