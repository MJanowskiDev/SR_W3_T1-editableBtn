import { getColorHex } from '../../utils/colors/getColor';

const defaultProps = {
	color: 'midnight-blue',
	bgColor: 'silver'
};

const Textarea = ({ color, bgColor }) => {
	const styles = {
		padding: 16,
		margin: 5,
		borderRadius: 6,
		color: getColorHex(color),
		background: getColorHex(bgColor),
		fontSize: '1.6rem'
	};
	return <textarea style={styles} />;
};

Textarea.defaultProps = defaultProps;

export default Textarea;
