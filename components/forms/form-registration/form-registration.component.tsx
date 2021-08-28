import { Form, Formik } from 'formik';
import Button from '../../ui/button/button.component';
import TextField from '../../ui/form-fields/text-field';
import {
  FormActions,
  FormContent,
  FormItem,
  FormTitle,
} from '../forms.component';
import style from './form-registration.module.scss';

const FormRegistration = (): JSX.Element => {
  const onSubmit = async ({ username, password }) => {
    console.log(username, password);
  };

  return (
    <div className={style.form}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form noValidate>
            <FormTitle>Регистрация</FormTitle>

            <FormContent>
              <FormItem>
                <TextField
                  label="Имя"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
              </FormItem>

              <FormItem>
                <TextField
                  label="Пароль"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </FormItem>
            </FormContent>

            <FormActions>
              <Button text="Зарегистрироваться" type="submit" />
            </FormActions>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormRegistration;
