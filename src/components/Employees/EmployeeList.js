import { getColorHex } from 'utils/colors/getColor';
const styles = {
	listDiv: {
		overflowY: 'auto',
		minWidth: 200,
		padding: 8
	},
	item: {
		listStyle: 'none',
		padding: '20px 5px'
	},
	selectedItem: {
		color: getColorHex('sun-flower'),
		fontWeight: 700,
		listStyle: 'none',
		padding: '20px 5px'
	}
};
const EmployeeList = ({ data, clicked, selectedId }) => {
	return (
		<div style={styles.listDiv}>
			{data.map((employee) => (
				<li
					onClick={() => clicked && clicked(employee)}
					style={employee.id === selectedId ? styles.selectedItem : styles.item}
					key={employee.id}
				>
					{employee.name} {employee.surname}
				</li>
			))}
		</div>
	);
};

export default EmployeeList;
