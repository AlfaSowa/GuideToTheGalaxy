import { Form, Formik } from "formik";
import { createUser } from "../../../methods/account";
import Button from "../../ui/button/button.component";
import TextField from "../../ui/form-fields/textfield";
import {
  FormActions,
  FormContent,
  FormItem,
} from "../../ui/form/form.component";

function FormRegistration(): JSX.Element {
  const onSubmit = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    await createUser({
      username,
      password,
    });
  };

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, errors, handleChange }) => (
          <Form noValidate>
            <FormContent>
              <FormItem>
                <TextField
                  placeholder="Имя"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem>
                <TextField
                  placeholder="Пароль"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>
            </FormContent>

            <FormActions>
              <Button type="submit">Зарегистрироваться</Button>
            </FormActions>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormRegistration;
