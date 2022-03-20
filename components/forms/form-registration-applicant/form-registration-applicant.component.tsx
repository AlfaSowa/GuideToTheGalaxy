import { Form, Formik } from "formik";
import {
  FormActions,
  FormContent,
  FormItem,
} from "../../lib/form/form-components";
import { TextField } from "../../lib/form/form-fields";
import Button from "../../ui/button/button.component";

const FormRegistrationApplicant = (): JSX.Element => {
  const onSubmit = (values) => {
    console.log("onSubmit", values);
    console.log("test");
  };

  return (
    <div>
      <Formik
        initialValues={{
          lastName: "",
          firstName: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ values, handleChange }) => (
          <Form noValidate>
            <FormContent>
              <FormItem>
                <TextField
                  value={values.lastName}
                  name="lastName"
                  placeholder="Фамилия"
                  onChange={handleChange}
                />
              </FormItem>

              <FormItem>
                <TextField
                  value={values.firstName}
                  name="firstName"
                  placeholder="Имя"
                  onChange={handleChange}
                />
              </FormItem>

              <FormItem>
                <TextField
                  value={values.phone}
                  name="phone"
                  placeholder="Телефон"
                  onChange={handleChange}
                />
              </FormItem>
              <FormItem>
                <TextField
                  value={values.email}
                  name="email"
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
              <FormItem>
                <TextField
                  value={values.confirmPassword}
                  name="confirmPassword"
                  placeholder="Подтверждение пароля"
                  onChange={handleChange}
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
};

export default FormRegistrationApplicant;
