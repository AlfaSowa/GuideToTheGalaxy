import {
  Form,
  Formik,
} from 'formik';
import { useState } from 'react';
import TextField from '../../ui/form-fields/textfield';
import {
  FormActions,
  FormContent,
  FormItem,
  FormTitle,
} from '../../ui/form/form.component';
import Button from '../../ui/button/button.component';

const AddNewPart = ({ setIsShow, setParts }): JSX.Element => {
  const [themesInitial, setThemesInitial] = useState([]);

  const onSubmit = async (values) => {
    console.log('values', values);
    setParts((prev) => [...prev, values]);
    setIsShow(false);
  };

  const addNewTheme = () => {
    setThemesInitial((prev) => [...prev, {
      name: '',
      alias: '',
    }]);
  };

  console.log('themesInitial', themesInitial);

  return (
    <>
      <Formik
        initialValues={{
          image: null,
          themes: themesInitial,
        }}
        // validationSchema={schemaLogin}
        onSubmit={(values: any) => {
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
            <FormTitle>Создание главы</FormTitle>

            <FormContent>
              <FormItem>
                <TextField
                  placeholder='Название Части'
                  type='text'
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem>
                <TextField
                  placeholder='Алиас Части'
                  type='text'
                  name='alias'
                  value={values.alias}
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>
            </FormContent>

            {themesInitial.map((theme, idx) => (
              <div>
                <FormItem>
                  <TextField
                    placeholder='Название Темы'
                    type='text'
                    name={`themes[${idx}].name`}
                    value={values?.themes[idx]?.name}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>

                <FormItem>
                  <TextField
                    placeholder='Алиас Части'
                    type='text'
                    name={`themes[${idx}].alias`}
                    value={values?.themes[idx]?.alias}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>
              </div>
            ))}

            <Button onClick={addNewTheme}>
              Добавить тему
            </Button>

            <FormActions>
              <Button type='submit'>Добавить</Button>
            </FormActions>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddNewPart;
