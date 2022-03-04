import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as yup from "yup";
import { getToken } from "../../../methods/account";
import { AuthType } from "../../../methods/account/interfaces";
import Button from "../../ui/button/button.component";
import TextField from "../../ui/form-fields/textfield";
import {
  FormContent,
  FormActions,
  FormItem,
  FormRow,
} from "../../ui/form/form.component";

const loginSchema = yup.object().shape({
  username: yup.string().required("Обязательное поле"),
  password: yup.string().required("Обязательное поле"),
});

const FormLogin = () => {
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
    <div>
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
        {({ values, handleChange, errors }) => (
          <Form noValidate>
            <FormContent>
              <FormRow>
                <FormItem fullWidth>
                  <TextField
                    placeholder="Имя:"
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>
              </FormRow>

              <FormRow>
                <FormItem fullWidth>
                  <TextField
                    placeholder="Пароль:"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    errors={errors}
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
    </div>
  );
};

export default FormLogin;
