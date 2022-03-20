import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FC } from "react";
import * as yup from "yup";
import { getToken } from "../../../../methods/account";
import { AuthType } from "../../../../methods/account/interfaces";
import {
  FormActions,
  FormContent,
  FormItem,
  FormRow,
} from "../../../lib/form/form-components";
import { TextField } from "../../../lib/form/form-fields";
import Button from "../../../ui/button/button.component";

const loginSchema = yup.object().shape({
  username: yup.string().required("Обязательное поле"),
  password: yup.string().required("Обязательное поле"),
});

const ApplicantLoginForm: FC = () => {
  const router = useRouter();

  const onSubmit = async ({ username, password }: AuthType) => {
    await getToken({
      username,
      password,
    });
  };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ values, handleChange }) => (
        <Form noValidate>
          <FormContent>
            <FormRow>
              <FormItem>
                <TextField
                  placeholder="Имя:"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                />
              </FormItem>
            </FormRow>

            <FormRow>
              <FormItem>
                <TextField
                  name="password"
                  placeholder="Пароль:"
                  value={values.password}
                  onChange={handleChange}
                />
              </FormItem>
            </FormRow>
          </FormContent>

          <FormActions>
            <Button type="submit">Войти</Button>
            <Button onClick={handleClick}>Отмена</Button>
          </FormActions>
        </Form>
      )}
    </Formik>
  );
};

export default ApplicantLoginForm;
