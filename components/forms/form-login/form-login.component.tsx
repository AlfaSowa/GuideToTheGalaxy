import { Form, Formik, validateYupSchema } from 'formik';
import router from 'next/router';
import { useState } from 'react';
import { getAccountFx } from '../../../models/account';
import { Axios } from '../../../utils/axios';
import Button from '../../ui/button/button.component';
import TextField from '../../ui/form-fields/text-field';
import {
  FormContent,
  FormActions,
  FormItem,
  FormTitle,
} from '../forms.component';
import style from './form-login.module.scss';

const FormLogin = (): JSX.Element => {
  const [errors, setErrors] = useState(null);

  const onSubmit = async ({ username, password }) => {
    try {
      const { data, status } = await Axios.post('token/login', {
        username,
        password,
        isPrivacyPolicyAccepted: true, // политика конфиденциальности
        isUserTermsAccepted: true, // обработка личных данных
      });

      if (status === 200) {
        document.cookie = `refreshToken=${data.refreshToken}; path=/;`;
        document.cookie = `token=${data.token}; path=/;`;

        await getAccountFx(document.cookie);

        router.push('/');
      }
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      // validationSchema={schemaLogin}
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
          <FormTitle>Вход</FormTitle>

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
            <Button text="Войти" type="submit" />
          </FormActions>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
