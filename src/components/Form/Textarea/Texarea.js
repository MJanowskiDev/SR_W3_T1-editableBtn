import { getColorHex } from 'utils/colors/getColor';

const defaultProps = {
	color: 'midnight-blue',
	bgColor: 'clouds',
	borderRadius: 6,
	borderSize: 2,
	borderColor: 'midnight-blue'
};

const Textarea = ({ color, bgColor, borderSize, borderRadius, borderColor }) => {
	const styles = {
		padding: 16,
		margin: 5,
		color: getColorHex(color),
		background: getColorHex(bgColor),
		fontSize: '1.6rem',
		borderRadius: borderRadius,
		border: `${borderSize}px solid ${getColorHex(borderColor)}`
	};
	return <textarea style={styles} />;
};

Textarea.defaultProps = defaultProps;

export default Textarea;
