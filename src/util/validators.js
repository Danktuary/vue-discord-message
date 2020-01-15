export const dates = {
	validator(value) {
		const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

		if (typeof value === 'string' && !dateRegex.test(value)) {
			return false;
		}

		return true;
	},
};

export default { dates };
