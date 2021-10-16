import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Button, Input, Textarea } from 'components/Form';
import Card from 'components/Card';
import MenuLink from 'components/MenuLink';
import Menu from 'components/Menu';
import Employees from 'components/Employees';
import { getEmployees } from 'utils/eployees/getEployees';
import paellaImage from 'assets/images/paella.webp';

function App() {
	return (
		<div className="app">
			<Menu>
				<MenuLink to="/">Home</MenuLink>
				<MenuLink to="/about">About</MenuLink>
				<MenuLink to="/contact" isActive>
					Contact
				</MenuLink>
				<MenuLink to="/posts">Posts</MenuLink>
			</Menu>
			<h1>FORM COMPONENTS</h1>
			<h4>Buttons</h4>
			<div>
				<Button />
				<Button icon={faCoffee} color="sun-flower" bgColor="wet-asphalt">
					Coffe time!
				</Button>
				<Button icon={faBookmark} color="wet-asphalt" bgColor="sun-flower">
					Bookmark
				</Button>
			</div>
			<h4>Inputs</h4>
			<div>
				<Input />
				<Input color="sun-flower" bgColor="wet-asphalt" />
				<Input color="sun-flower" bgColor="wet-asphalt" borderColor="asbestos" borderRadius={25} borderSize={5} />
			</div>
			<h4>Textareas</h4>
			<div>
				<Textarea />
				<Textarea color="sun-flower" bgColor="wet-asphalt" />
				<Textarea color="sun-flower" bgColor="wet-asphalt" borderColor="asbestos" borderRadius={25} borderSize={5} />
			</div>
			<h4>Cards</h4>
			<div>
				<Card
					title="Shrim and Chorizo Paella"
					intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
					content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
					image={paellaImage}
				/>
				<Card
					title="Shrim and Chorizo Paella"
					intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
					image={paellaImage}
				/>
			</div>
			<h4>Employees</h4>
			<div>
				<Employees data={getEmployees()} />
				<Employees />
			</div>
		</div>
	);
}

export default App;
