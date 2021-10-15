import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { Button, Input, Textarea } from 'components/Form';

function App() {
	return (
		<div className="app">
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
		</div>
	);
}

export default App;
