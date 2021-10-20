import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Button, Input, Textarea } from 'components/Form';
import Card from 'components/Card';
import MenuLink from 'components/MenuLink';
import Menu from 'components/Menu';
import Employees from 'components/Employees';
import { getEmployees } from 'utils/eployees/getEployees';
import paellaImage from 'assets/images/paella.webp';

const paellaCardContent = (
	<div>
		<p>Method:</p>
		<p>Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.</p>
		<p>
			Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and
			chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and
			set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper,
			and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups
			chicken broth; bring to a boil.
		</p>
		<p>
			Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of
			the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them
			down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes
			more. (Discard any mussels that don’t open.)
		</p>
		<p>Set aside off of the heat to let rest for 10 minutes, and then serve.</p>
	</div>
);

function App() {
	return (
		<div className="app">
			<Menu>
				<MenuLink to="/" isActive>
					Home
				</MenuLink>
				<MenuLink to="/about">About</MenuLink>
				<MenuLink to="/contact">Contact</MenuLink>
				<MenuLink to="/posts">Posts</MenuLink>
			</Menu>
			<h1>FORM COMPONENTS</h1>
			<h2>Buttons</h2>
			<div>
				<Button />
				<Button icon={faCoffee} color="sun-flower" bgColor="wet-asphalt">
					Coffe time!
				</Button>
				<Button icon={faBookmark} color="wet-asphalt" bgColor="sun-flower">
					Bookmark
				</Button>
			</div>
			<h2>Inputs</h2>
			<div>
				<Input />
				<Input color="sun-flower" bgColor="wet-asphalt" />
				<Input color="sun-flower" bgColor="wet-asphalt" borderColor="asbestos" borderRadius={25} borderSize={5} />
			</div>
			<h2>Textareas</h2>
			<div>
				<Textarea />
				<Textarea color="sun-flower" bgColor="wet-asphalt" />
				<Textarea color="sun-flower" bgColor="wet-asphalt" borderColor="asbestos" borderRadius={25} borderSize={5} />
			</div>
			<h2>Cards</h2>
			<div>
				<Card
					title="Shrim and Chorizo Paella"
					intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
					content={paellaCardContent}
					image={paellaImage}
				/>
				<Card
					title="Shrim and Chorizo Paella"
					intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
					image={paellaImage}
				/>
			</div>
			<h2>Employees</h2>
			<div>
				<Employees data={getEmployees()} />
				<Employees />
			</div>
		</div>
	);
}

export default App;
