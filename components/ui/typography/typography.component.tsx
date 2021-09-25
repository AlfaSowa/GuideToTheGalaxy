import clsx from 'clsx';
import { createElement, ReactNode } from 'react';
import styles from './typography.module.scss';

interface TypographyProps {
	children: ReactNode;
	component?: 'span' | 'p' | 'h1' | 'h5';
	className?: string;
	variant?: 'text' | 'subtext';
	darkMode?: boolean;
}

const Typography = ({
	children,
	component,
	className,
	darkMode,
	variant,
}: TypographyProps): JSX.Element => {
	return createElement(
		component,
		{
			className: clsx(
				styles.root,
				{ [styles.root__dark]: darkMode },
				{ [className]: className },
				{ [variant]: variant }
			),
		},
		children
	);
};

Typography.defaultProps = {
	component: 'span',
	className: null,
	variant: null,
	darkMode: false,
};

export default Typography;
