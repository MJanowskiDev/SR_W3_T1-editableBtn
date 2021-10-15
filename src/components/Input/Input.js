import { getColorHex } from '../../utils/colors/getColor';

const defaultProps = {
	color: 'midnight-blue',
	bgColor: 'silver'
};

const Input = ({ color, bgColor }) => {
	const styles = {
		padding: 16,
		margin: 5,
		borderRadius: 6,
		color: getColorHex(color),
		background: getColorHex(bgColor),
		fontSize: '1.6rem'
	};
	return <input style={styles} />;
};

Input.defaultProps = defaultProps;

export default Input;
