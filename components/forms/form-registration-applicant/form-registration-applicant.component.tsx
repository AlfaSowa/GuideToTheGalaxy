import { Form, Formik } from "formik";
import { createUser } from "../../../methods/account";
import Button from "../../ui/button/button.component";
import TextField from "../../ui/form-fields/textfield";
import {
  FormActions,
  FormContent,
  FormItem,
} from "../../ui/form/form.component";

const FormRegistrationApplicant = (): JSX.Element => {
  const onSubmit = (values) => {
    console.log("onSubmit", values);
    console.log("test");
  };

  return (
    <div>
      <Formik
        initialValues={{}}
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
                  placeholder="Фамилия"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem>
                <TextField
                  placeholder="Имя"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem>
                <TextField
                  placeholder="Телефон"
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>
              <FormItem>
                <TextField
                  placeholder="Почта"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem>
                <TextField
                  placeholder="Пароль"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>
              <FormItem>
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
};

export default FormRegistrationApplicant;
