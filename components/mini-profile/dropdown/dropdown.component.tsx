import {
  Form,
  Formik,
} from 'formik';
import { getToken } from '../../../methods/account';
import Button from '../../ui/button/button.component';
import TextField from '../../ui/form-fields/textfield';
import {
  FormActions,
  FormContent,
  FormItem,
} from '../../ui/form/form.component';
import styles from './dropdown.module.scss';
import MiniProfileDropdownInfo from './info.component';
import MiniProfileDropdownSettings from './settings.component';

const MiniProfileDropdown = (): JSX.Element => {
  const onSubmit = async (values) => {
    console.log(values);
    const res = await getToken(values);
  };

  return (
    <div className={styles.root}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        // validationSchema={schemaLogin}
        onSubmit={(values) => onSubmit(values)}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, handleChange, errors }) => (
          <Form noValidate>
            <FormContent>
              <FormItem>
                <TextField
                  placeholder='Имя:'
                  type='text'
                  name='username'
                  value={values.username}
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem>
                <TextField
                  placeholder='Пароль:'
                  type='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>
            </FormContent>

            <FormActions>
              <Button type='submit'>Войти</Button>
              <Button type='reset'>Отмена</Button>
            </FormActions>
          </Form>
        )}
      </Formik>

      {/* <div className={styles.item}>
        <MiniProfileDropdownInfo />
      </div>

      <div className={styles.item}>
        <MiniProfileDropdownSettings />
      </div>

      <div className={styles.item}>
        <MiniProfileDropdownSettings />
      </div> */}
    </div>
  );
};

export default MiniProfileDropdown;
