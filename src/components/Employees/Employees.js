import { useState } from 'react';
import { getColorHex } from 'utils/colors/getColor';
import EmployeeList from './EmployeeList';
import EmployeeDetails from './EmployeeDetails';

const styles = {
	container: {
		display: 'flex',
		background: getColorHex('clouds'),
		border: `1px solid ${getColorHex('wet-asphalt')}`,
		borderRadius: 6,
		margin: 8,
		maxHeight: 400,
		width: 645
	},
	noData: {
		textAlign: 'center',
		width: '100%',
		fontWeight: 700,
		color: getColorHex('alizarin')
	}
};

const Employees = ({ data }) => {
	const [ selectedEmployee, setSelectedEmployee ] = useState();
	const [ selectedEmployeeId, setSelectedEmployeeId ] = useState();

	const clicked = (employee) => {
		setSelectedEmployee(employee);
		setSelectedEmployeeId(employee.id);
	};

	const noData = (
		<div style={styles.container}>
			<p style={styles.noData}>No employees data to show!</p>
		</div>
	);
	const employeesComponent = (
		<div style={styles.container}>
			<EmployeeList data={data} clicked={clicked} selectedId={selectedEmployeeId} />
			<EmployeeDetails data={selectedEmployee} />
		</div>
	);

	return data ? employeesComponent : noData;
};

export default Employees;
