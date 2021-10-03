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
import AddNewPart from './add-new-part.component';

const FormCreateChapter = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const [parts, setParts] = useState([]);

  const onSubmit = async (values) => {
    console.log('values', values);
    console.log('parts', parts);
  };

  return (
    <>
      <Formik
        initialValues={{ image: null }}
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
                  placeholder='Название'
                  type='text'
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <FormItem>
                <TextField
                  placeholder='Алиас'
                  type='text'
                  name='alias'
                  value={values.alias}
                  onChange={handleChange}
                  errors={errors}
                />
              </FormItem>

              <Button onClick={() => setIsShow(true)}>Добавить часть</Button>
            </FormContent>

            {parts.map((part) => (
              <div>{part.name}</div>
            ))}

            <FormActions>
              <Button type='submit'>Создать</Button>
            </FormActions>
          </Form>
        )}
      </Formik>

      {isShow && <AddNewPart setIsShow={setIsShow} setParts={setParts} />}
    </>
  );
};

export default FormCreateChapter;
