import { getColorHex } from 'utils/colors/getColor';

const styles = {
	container: {
		padding: 8,
		overflowY: 'auto',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		color: getColorHex('wet-asphalt')
	},
	field: {
		height: '32px'
	},
	fieldName: {
		textTransform: 'capitalize',
		fontWeight: 700,
		marginRight: 5
	},
	noData: {
		textAlign: 'center',
		fontWeight: 700
	}
};

const EmployeeDetails = ({ data }) => {
	const noData = <p style={styles.noData}>Please select employee</p>;
	const employeeDetails =
		data &&
		Object.keys(data).map((key, idx) => (
			<div style={styles.field} key={idx}>
				<span style={styles.fieldName}>{key}:</span> {data[key]}
			</div>
		));

	return <div style={styles.container}>{data ? employeeDetails : noData}</div>;
};

export default EmployeeDetails;
