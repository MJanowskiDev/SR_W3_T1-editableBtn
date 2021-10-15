import colors from './colors.json';

export const getColorHex = (colorName, defaultColor = 'initial') => {
	const findRes = colorName && colors.find((colorItem) => colorItem.name.toUpperCase() === colorName.toUpperCase());
	return findRes ? findRes.hex : defaultColor;
};
