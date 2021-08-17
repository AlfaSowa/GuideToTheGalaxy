import Button from '../../ui/button/button.component';
import TextField from '../../ui/form-fields/text-field';
import style from './form-registration.module.scss';

const FormRegistration = (): JSX.Element => {
  return (
    <div className={style.form}>
      <div className={style.form__title}>Регистрация</div>

      <div className={style.form__item}>
        <TextField type="text" name="Email" />
      </div>

      <div className={style.form__item}>
        <TextField type="password" name="Пароль" />
      </div>

      <div>
        <Button text="Зарегистрироваться" />
      </div>
    </div>
  );
};

export default FormRegistration;
