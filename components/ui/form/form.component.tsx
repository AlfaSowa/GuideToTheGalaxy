import clsx from "clsx";
import { ReactNode } from "react";
import style from "./form.module.scss";

interface FormContentProps {
  children: ReactNode;
}
interface FormTitleProps {
  children: ReactNode;
}
interface FormItemProps {
  children: ReactNode;
  fullWidth?: boolean
}
interface FormRowProps {
  children: ReactNode;
  title?: string;
}
interface FormActionsProps {
  children: ReactNode;
}

export function FormContent({ children }: FormContentProps): JSX.Element {
  return <div className={style.form__content}>{children}</div>;
}

export function FormTitle({ children }: FormTitleProps): JSX.Element {
  return <div className={style.form__title}>{children}</div>;
}

export function FormItem({ children, fullWidth }: FormItemProps): JSX.Element {
  return <div className={clsx(style.form__item, { [style.form__item__fullwidth]: fullWidth })}>{children}</div>;
}

export function FormRow({ children, title }: FormRowProps): JSX.Element {
  return (
    <div className={style.form__row}>
      {title && <div className={style.form__row__title}>{title}</div>}

      <div className={style.form__row__inner}>{children}</div>
    </div>
  );
}

export function FormActions({ children }: FormActionsProps): JSX.Element {
  return <div className={style.form__actions}>{children}</div>;
}

FormItem.defaultProps = {
  fullWidth: false,
};

FormRow.defaultProps = {
  title: null,
};
