import { useStore } from 'effector-react';
import {
  Form,
  Formik,
} from 'formik';
import Button from '../../../components/ui/button/button.component';
import TextArea from '../../../components/ui/form-fields/textarea.component';
import TextField from '../../../components/ui/form-fields/textfield';
import Select, { SelectItem } from '../../../components/ui/form-fields/select.component';
import {
  FormActions,
  FormContent,
  FormItem,
  FormRow,
  FormTitle,
} from '../../../components/ui/form/form.component';
import {
  ArmorEnum,
  CharacterClass,
  CharacteristicEnum,
  SkillsEnum,
  WeaponEnum,
} from '../../../interfaces/classes';
import { $utils } from '../../../models/utils';
import Checkbox from '../../../components/ui/form-fields/checkbox.component';
import CroupCheckboxes from '../../../components/ui/form-fields/groupCheckboxes.component';

const ProfileClassesNew = (): JSX.Element => {
  const utils = useStore($utils);

  console.log('utils', utils);

  return (
    utils && (
      <Formik
        initialValues={{}}
        // validationSchema={createChapterSchema}
        onSubmit={(values: any) => {
          console.log('values', values);
        // onSubmit(values);
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
          setFieldValue,
        }) => (
          <Form noValidate>
            <FormTitle>Добавить класс</FormTitle>

            <FormContent>
              <FormRow>
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
                  <Select
                    placeholder='Основная характеристика'
                    name='mainCharacteristic'
                    value={CharacteristicEnum[values.mainCharacteristic]}
                    onChange={setFieldValue}
                    errors={errors}
                  >
                    {utils?.characteristic.map((i, idx) => (
                      <SelectItem key={idx} value={i}>
                        {CharacteristicEnum[i]}
                      </SelectItem>
                    ))}
                  </Select>
                </FormItem>
              </FormRow>

              <FormRow title='Хиты'>
                <FormItem>
                  <TextField
                    placeholder='Кость хитов'
                    type='text'
                    name='hits'
                    value={values.hits}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>

                <FormItem>
                  <TextField
                    placeholder='Хиты на 1 уровне'
                    type='text'
                    name='hitsOnFirstLvl'
                    value={values.hitsOnFirstLvl}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>

                <FormItem>
                  <TextField
                    placeholder='Хиты на следующих уровнях'
                    type='text'
                    name='hitsOnNextLvl'
                    value={values.hitsOnNextLvl}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>

                <FormItem>
                  <Select
                    placeholder='Модификатор к хитам на следующих уровнях'
                    name='hitsModifier'
                    value={CharacteristicEnum[values.hitsModifier]}
                    onChange={setFieldValue}
                    errors={errors}
                  >
                    {utils?.characteristic.map((i, idx) => (
                      <SelectItem key={idx} value={i}>
                        {CharacteristicEnum[i]}
                      </SelectItem>
                    ))}
                  </Select>
                </FormItem>
              </FormRow>

              <FormRow title='Владение'>
                <FormItem>
                  <Select
                    placeholder='Владение спасбросками'
                    name='save'
                    value={CharacteristicEnum[values.save]}
                    onChange={setFieldValue}
                    errors={errors}
                  >
                    {utils?.characteristic.map((i, idx) => (
                      <SelectItem key={idx} value={i}>
                        {CharacteristicEnum[i]}
                      </SelectItem>
                    ))}
                  </Select>
                </FormItem>

                <FormItem>
                  <Select
                    placeholder='Доспехи'
                    name='armor'
                    value={ArmorEnum[values.armor]}
                    onChange={setFieldValue}
                    errors={errors}
                  >
                    {utils?.armor.map((i, idx) => (
                      <SelectItem key={idx} value={i}>
                        {ArmorEnum[i]}
                      </SelectItem>
                    ))}
                  </Select>
                </FormItem>

                <FormItem>
                  <Select
                    placeholder='Оружие'
                    name='weapon'
                    value={WeaponEnum[values.weapon]}
                    onChange={setFieldValue}
                    errors={errors}
                  >
                    {utils?.weapon.map((i, idx) => (
                      <SelectItem key={idx} value={i}>
                        {WeaponEnum[i]}
                      </SelectItem>
                    ))}
                  </Select>
                </FormItem>

                <FormItem>
                  <Select
                    placeholder='Навыки'
                    name='skills'
                    value={SkillsEnum[values.skills]}
                    onChange={setFieldValue}
                    errors={errors}
                  >
                    {utils?.skills.map((i, idx) => (
                      <SelectItem key={idx} value={i}>
                        {SkillsEnum[i]}
                      </SelectItem>
                    ))}
                  </Select>
                </FormItem>

                <FormItem>
                  <TextField
                    placeholder='Инструменты'
                    type='text'
                    name='instruments'
                    value={values.instruments}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>
              </FormRow>

              <FormRow title='Снаряжение'>
                <FormItem>
                  <TextField
                    placeholder='Снаряжение'
                    type='text'
                    name='equipment'
                    value={values.equipment}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>
              </FormRow>

              <FormRow title='Другое'>
                <FormItem fullWidth>
                  <TextArea
                    placeholder='Описание'
                    name='description'
                    value={values.description}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>
              </FormRow>

              <FormRow title='Другое'>
                <FormItem fullWidth>
                  <Checkbox
                    placeholder='Описание'
                    name='qwe'
                    value={values.qwe}
                    onChange={handleChange}
                    errors={errors}
                  />
                </FormItem>
              </FormRow>

              <FormRow title='Другое'>
                <FormItem fullWidth>
                  <CroupCheckboxes>
                    <Checkbox
                      placeholder='Описание'
                      name='qweqwe'
                      value={values.qweqwe}
                      onChange={handleChange}
                      errors={errors}
                    />
                    <Checkbox
                      placeholder='Описание'
                      name='qweqwe'
                      value={values.qweqwe}
                      onChange={handleChange}
                      errors={errors}
                    />
                    <Checkbox
                      placeholder='Описание'
                      name='qweqwe'
                      value={values.qweqwe}
                      onChange={handleChange}
                      errors={errors}
                    />
                  </CroupCheckboxes>
                </FormItem>
              </FormRow>
            </FormContent>

            <FormActions>
              <Button type='submit'>Создать</Button>
            </FormActions>
          </Form>
        )}
      </Formik>
    )
  );
};

export default ProfileClassesNew;
