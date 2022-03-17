import { Form, Formik } from "formik";
import { createApplicant } from "../../../methods/auth/registration/applicant";
import { ICreateApplicant } from "../../../methods/auth/registration/interfaces";
import Button from "../../ui/button/button.component";
import TextField from "../../ui/form-fields/textfield";
import {
  FormActions,
  FormContent,
  FormItem,
} from "../../ui/form/form.component";

function FormRegistrationApplicant(): JSX.Element {
  const onSubmit = (values: ICreateApplicant) => {
    console.log("onSubmit", values);
    createApplicant(values);
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
        onSubmit={(values: ICreateApplicant) => {
          onSubmit(values);
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, handleChange }) => (
          <Form noValidate>
            <FormContent>
              <FormItem fullWidth>
                <TextField
                  placeholder="Фамилия"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem fullWidth>
                <TextField
                  placeholder="Имя"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem fullWidth>
                <TextField
                  placeholder="Телефон"
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem fullWidth>
                <TextField
                  placeholder="Почта"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem fullWidth>
                <TextField
                  placeholder="Пароль"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem fullWidth>
                <TextField
                  placeholder="Подтверждение пароля"
                  type="password"
                  name="confirmPassword"
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

export default FormRegistrationApplicant;
