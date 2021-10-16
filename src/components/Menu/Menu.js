import { getColorHex } from 'utils/colors/getColor';

const styles = {
	height: '100vh',
	width: 136,
	position: 'fixed',
	backgroundColor: getColorHex('wet-asphalt'),
	display: 'flex',
	flexDirection: 'column',
	gap: 16,
	top: 0,
	left: 0,
	padding: 32
};
const Menu = ({ children }) => <div style={styles}>{children}</div>;

export default Menu;
