import { createEffect, createStore } from 'effector';
import { Axios } from '../utils/axios';

export const getAccountFx = createEffect(
	async ({ token }: any): Promise<any> => {
		console.log(token);

		if (token) {
			document.cookie = `token=${token}; path=/`;
			const config = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			try {
				const { data, status } = await Axios.get('auth/token', config);

				if (status === 200) {
					return data;
				}
			} catch (error) {
				console.log(error);
			}
		}

		return null;
	}
);

export const $account = createStore(null).on(
	getAccountFx.doneData,
	(_, data) => data
);

$account.watch((accountData) => console.log('accountData:', accountData));
