/* eslint-disable consistent-return */
import {
  Form,
  Formik,
} from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import TextField from '../../ui/form-fields/textfield';
import {
  FormActions,
  FormContent,
  FormItem,
  FormTitle,
} from '../../ui/form/form.component';
import Button from '../../ui/button/button.component';
import AddNewPart from './add-new-part.component';
import { Axios } from '../../../utils/axios';

const createChapterSchema = yup.object().shape({
  name: yup.string().required('Обязательное поле'),
  alias: yup.string().required('Обязательное поле'),
});

const FormCreateChapter = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);
  const [parts, setParts] = useState([]);

  const onSubmit = async (values): Promise<void> => {
    console.log('parts', {
      ...values,
      ...parts,
    });

    try {
      const { data, status } = await Axios.post('chapters', {
        ...values,
        ...parts,
      });

      if (status === 200) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ image: null }}
        validationSchema={createChapterSchema}
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
