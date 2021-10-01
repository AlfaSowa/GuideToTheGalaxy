const getCookie = (name) => {
	const nameEQ = `${name}=`;
	const ca = document.cookie.split(';');
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.startsWith(' ')) c = c.substring(1, c.length);
		if (c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

export default getCookie;
