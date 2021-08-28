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
import style from './form-edit-profile.module.scss';

const FormEditProfile = (): JSX.Element => {
  const [errors, setErrors] = useState(null);

  const onSubmit = async ({ username, password }) => {
    console.log('1');
  };

  return (
    <div className={style.form}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        // validationSchema={schemaLogin}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
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
    </div>
  );
};

export default FormEditProfile;
