import clsx from 'clsx';
import Link from 'next/link';
import {
  ReactNode,
  useEffect,
  useState,
} from 'react';
import styles from './tabs.module.scss';

interface CustomTabsProps {
  children: ReactNode;
}

interface TabsProps {
  children?: ReactNode;
  onChange: any;
}

interface TabProps {
  value: any;
  text: string;
  focused: any;
  link?: string;
  linkIcon?: any;
}

interface TabsPanelProps {
  value: any;
  children: ReactNode;
  index: any;
}

export const CustomTabs = ({ children }: CustomTabsProps): JSX.Element => {
  return <div>{children}</div>;
};

export const Tabs = ({ children, onChange }: TabsProps): JSX.Element => {
  return (
    <div className={styles.tabs} onClick={onChange}>
      {children}
    </div>
  );
};

export const Tab = ({
  value,
  text,
  focused,
  link,
  linkIcon,
}: TabProps): JSX.Element => {
  return (
    <>
      {!link && (
        <div
          data-value={value}
          className={clsx(styles.tab, {
            [styles.focused]: focused,
          })}
        >
          {text}
        </div>
      )}

      {link && (
        <Link href={link}>
          <a
            // className={clsx(classes.root, {
            // 	[classes.focused]: focused,
            // })}
            data-value={value}
          >
            {text}

            {linkIcon && linkIcon}
          </a>
        </Link>
      )}
    </>
  );
};

export const TabsPanel = ({
  value,
  index,
  children,
}: TabsPanelProps): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (value === index) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [value]);
  return isShow && <div>{children}</div>;
};
