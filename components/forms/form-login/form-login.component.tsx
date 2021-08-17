import Button from '../../ui/button/button.component';
import TextField from '../../ui/form-fields/text-field';
import style from './form-login.module.scss';

const FormLogin = (): JSX.Element => {
  return (
    <div className={style.form}>
      <div className={style.form__title}>Вход</div>

      <div className={style.form__item}>
        <TextField type="text" name="Email" />
      </div>

      <div className={style.form__item}>
        <TextField type="password" name="Пароль" />
      </div>

      <div>
        <Button text="Войти" />
      </div>
    </div>
  );
};

export default FormLogin;
