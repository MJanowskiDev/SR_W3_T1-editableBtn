import { getColorHex } from 'utils/colors/getColor';

const MenuLink = ({ to, children, isActive }) => {
	const styles = {
		textDecoration: isActive ? 'underline' : 'none',
		color: isActive ? getColorHex('sun-flower') : getColorHex('clouds'),
		fontSize: '1.2rem'
	};
	return (
		<a style={styles} href={to}>
			{children}
		</a>
	);
};

export default MenuLink;
