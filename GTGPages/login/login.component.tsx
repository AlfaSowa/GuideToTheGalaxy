import FormLogin from '../../components/forms/form-login/form-login.component';
import style from './login.module.scss';

const Loginpage = (): JSX.Element => {
  return (
    <div className={style.login}>
      <FormLogin />
    </div>
  );
};

export default Loginpage;
