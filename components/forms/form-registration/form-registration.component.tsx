import { Form, Formik } from 'formik';
import { CreateUser } from '../../../methods/account';
import Button from '../../ui/button/button.component';
import TextField from '../../ui/form-fields/text-field';
import {
	FormActions,
	FormContent,
	FormItem,
	FormTitle,
} from '../../ui/form/form.component';
import style from './form-registration.module.scss';

const FormRegistration = (): JSX.Element => {
	const onSubmit = async ({ username, password }) => {
		CreateUser({ username, password });
	};

	return (
		<div className={style.form}>
			<Formik
				initialValues={{
					username: '',
					password: '',
				}}
				onSubmit={(values) => {
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
						<FormTitle>Регистрация</FormTitle>

						<FormContent>
							<FormItem>
								<TextField
									placeholder='Имя'
									type='text'
									name='username'
									value={values.username}
									onChange={handleChange}
								/>
							</FormItem>

							<FormItem>
								<TextField
									placeholder='Пароль'
									type='password'
									name='password'
									value={values.password}
									onChange={handleChange}
								/>
							</FormItem>
						</FormContent>

						<FormActions>
							<Button type='submit'>Зарегистрироваться</Button>
						</FormActions>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormRegistration;
