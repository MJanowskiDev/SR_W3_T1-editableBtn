import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getColorHex } from 'utils/colors/getColor';

const defaultProps = {
	children: 'Default button',
	color: 'midnight-blue',
	bgColor: 'clouds'
};

const Button = ({ icon, color, bgColor, children }) => {
	const styles = {
		button: {
			padding: 16,
			margin: 5,
			borderRadius: 6,
			color: getColorHex(color),
			background: getColorHex(bgColor),
			fontSize: '1.6rem'
		},
		icon: {
			paddingRight: 10
		}
	};

	return (
		<button style={styles.button}>
			{icon && <FontAwesomeIcon icon={icon} style={styles.icon} />}
			{children}
		</button>
	);
};

Button.defaultProps = defaultProps;

export default Button;
