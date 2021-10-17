import { getColorHex } from 'utils/colors/getColor';

const styles = {
	height: '100vh',
	width: 80,
	position: 'fixed',
	backgroundColor: getColorHex('wet-asphalt'),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 16,
	top: 0,
	left: 0,
	padding: 32
};

const Menu = ({ children }) => <div style={styles}>{children}</div>;

export default Menu;
