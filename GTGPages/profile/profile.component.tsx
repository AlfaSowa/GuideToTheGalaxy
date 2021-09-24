import { Button, TextField } from '@material-ui/core';
import { useStore } from 'effector-react';
import { Form, Formik } from 'formik';
import FormEditProfile from '../../components/forms/form-edit-profile/form-edit-profile.component';
import {
	FormActions,
	FormContent,
	FormItem,
} from '../../components/forms/forms.component';
import { $account } from '../../models/account';
import { Axios } from '../../utils/axios';
import style from './profile.module.scss';

const ProfilePage = (): JSX.Element => {
	const onSubmit = async (values) => {
		try {
			const { data, status } = await Axios.post('/places', {
				title: values.title,
				description: values.description,
			});

			console.log('placesData', data);

			if (status === 200) {
				return data;
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={style.profile}>
			<div>Добавить карточку</div>

			<Formik
				initialValues={{
					title: '',
					description: '',
				}}
				// validationSchema={schemaLogin}
				onSubmit={(values) => onSubmit(values)}
				validateOnChange={false}
				validateOnBlur={false}
			>
				{({ values, handleChange }) => (
					<Form noValidate>
						<FormContent>
							<FormItem>
								<TextField
									placeholder='Заголовок карточки'
									type='text'
									name='title'
									value={values.title}
									onChange={handleChange}
								/>
							</FormItem>

							<FormItem>
								<TextField
									placeholder='Описание'
									type='text'
									name='description'
									value={values.description}
									onChange={handleChange}
								/>
							</FormItem>
						</FormContent>

						<FormActions>
							<Button type='submit'>Создать</Button>
						</FormActions>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ProfilePage;
