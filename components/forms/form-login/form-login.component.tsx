import {
  Form,
  Formik,
  validateYupSchema,
} from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getToken } from '../../../methods/account';
import { getAccountFx } from '../../../models/account';
import { Axios } from '../../../utils/axios';
import Button from '../../ui/button/button.component';
import TextField from '../../ui/form-fields/text-field';
import {
  FormContent,
  FormActions,
  FormItem,
  FormTitle,
} from '../../ui/form/form.component';
import style from './form-login.module.scss';

const FormLogin = (): JSX.Element => {
  const router = useRouter();

  const onSubmit = async ({ username, password }) => {
    const data = await getToken({
      username,
      password,
    });
    console.log(data);
  };

  return (
    <div className={style.form}>
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
        {({ values, handleChange }) => (
          <Form noValidate>
            <FormTitle>Вход</FormTitle>

            <FormContent>
              <FormItem>
                <TextField
                  placeholder='Имя:'
                  type='text'
                  name='username'
                  value={values.username}
                  onChange={handleChange}
                />
              </FormItem>

              <FormItem>
                <TextField
                  placeholder='Пароль:'
                  type='password'
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                />
              </FormItem>
            </FormContent>

            <FormActions>
              <Button type='submit'>Войти</Button>
              <Button onClick={() => router.push('/')}>
                Отмена
              </Button>
            </FormActions>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormLogin;
