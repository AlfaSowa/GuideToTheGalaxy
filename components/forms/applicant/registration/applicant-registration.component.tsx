import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import * as yup from "yup";
import { createApplicant } from "../../../../methods/auth/registration/applicant";
import { ICreateApplicant } from "../../../../methods/auth/registration/interfaces";
import {
  FormActions,
  FormContent,
  FormItem,
} from "../../../lib/form/form-components";
import { TextField } from "../../../lib/form/form-fields";
import Button from "../../../ui/button/button.component";

const registrationSchema = yup.object().shape({
  username: yup.string().required("Обязательное поле"),
  password: yup.string().required("Обязательное поле"),
});

const ApplicantRegistrationForm: FC = () => {
  const router = useRouter();
  const onSubmit = (values: ICreateApplicant) => {
    createApplicant(values);
  };

  const handleClick = () => {
    router.push("/");
  };

  const handleClickLogin = useCallback(() => {
    router.push("/account/applicant");
  }, [router]);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(values: ICreateApplicant) => {
        onSubmit(values);
      }}
      validationSchema={registrationSchema}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ values, handleChange }) => (
        <Form noValidate>
          <FormContent>
            <FormItem>
              <TextField
                value={values.username}
                name="username"
                placeholder="Почта"
                onChange={handleChange}
              />
            </FormItem>

            <FormItem>
              <TextField
                value={values.password}
                name="password"
                placeholder="Пароль"
                onChange={handleChange}
              />
            </FormItem>

            <Button onClick={handleClick}>На главную</Button>
          </FormContent>

          <FormActions>
            <Button onClick={handleClickLogin}>Войти</Button>

            <Button variant="secondary" type="submit">
              Зарегистрироваться
            </Button>
          </FormActions>
        </Form>
      )}
    </Formik>
  );
};

export default ApplicantRegistrationForm;
