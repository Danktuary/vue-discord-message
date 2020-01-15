export const dates = {
	formatDate(value) {
		if (!(value instanceof Date)) return value;
		return `${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`;
	},
	padZeroes(value) {
		const [month, day, year] = value.split('/');
		return `${month.padStart(2, 0)}/${day.padStart(2, 0)}/${year}`;
	},
};

export default { dates };
