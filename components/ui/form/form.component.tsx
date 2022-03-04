import clsx from "clsx";
import { FC } from "react";
import style from "./styles.module.scss";

interface FormItemProps {
  fullWidth?: boolean;
}
interface FormRowProps {
  title?: string;
}

export const FormContent: FC = ({ children }) => (
  <div className={style.form__content}>{children}</div>
);

export const FormTitle: FC = ({ children }) => (
  <div className={style.form__title}>{children}</div>
);

export const FormItem: FC<FormItemProps> = ({ children, fullWidth }) => (
  <div
    className={clsx(style.form__item, {
      [style.form__item__fullwidth]: fullWidth,
    })}
  >
    {children}
  </div>
);

export const FormRow: FC<FormRowProps> = ({ children, title }) => (
  <div className={style.form__row}>
    {title && <div className={style.form__row__title}>{title}</div>}

    <div className={style.form__row__inner}>{children}</div>
  </div>
);

export const FormActions: FC = ({ children }) => (
  <div className={style.form__actions}>{children}</div>
);

FormItem.defaultProps = {
  fullWidth: false,
};

FormRow.defaultProps = {
  title: null,
};
