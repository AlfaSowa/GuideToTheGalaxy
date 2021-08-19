import style from './forms.module.scss';
import { ReactNode } from 'react';

interface FormContentProps {
  children: ReactNode;
}
interface FormTitleProps {
  children: ReactNode;
}
interface FormItemProps {
  children: ReactNode;
}
interface FormRowProps {
  children: ReactNode;
}
interface FormActionsProps {
  children: ReactNode;
}

export const FormContent = ({ children }: FormContentProps): JSX.Element => {
  return <div className={style.form__content}>{children}</div>;
};

export const FormTitle = ({ children }: FormTitleProps): JSX.Element => {
  return <div className={style.form__title}>{children}</div>;
};

export const FormItem = ({ children }: FormItemProps): JSX.Element => {
  return <div className={style.form__item}>{children}</div>;
};

export const FormRow = ({ children }: FormRowProps): JSX.Element => {
  return <div className={style.form__row}>{children}</div>;
};

export const FormActions = ({ children }: FormActionsProps): JSX.Element => {
  return <div className={style.form__actions}>{children}</div>;
};
