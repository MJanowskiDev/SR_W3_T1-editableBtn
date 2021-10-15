import './App.css';
import Button from './components/Button';
import { faBookmark, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Input from './components/Input';
import Textarea from './components/Textarea';

function App() {
	return (
		<div className="app">
			<h1>FORM COMPONENTS</h1>
			<h4>Buttons</h4>
			<div>
				<Button />
				<Button icon={faCoffee} bgColor="wet-asphalt" color="emerald">
					Coffe time!
				</Button>
				<Button icon={faBookmark} color="belize-hole">
					Bookmark
				</Button>
			</div>
			<h4>Inputs</h4>
			<div>
				<Input />
				<Input color="emerald" bgColor="wet-asphalt" />
			</div>
			<h4>Textareas</h4>
			<div>
				<Textarea />
				<Textarea color="emerald" bgColor="wet-asphalt" />
			</div>
		</div>
	);
}

export default App;
