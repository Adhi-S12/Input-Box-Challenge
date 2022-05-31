import './App.scss';
import Input from './components/Input';

function App() {
	return (
		<div className="wrapper">
			<h1 className="pageTitle">Inputs</h1>
			{/* Row 1 */}
			<div className="row">
				<Input />
				<Input title={`&:hover`} />
				<Input title={`&:focus`} />
			</div>
			{/* Row 2 */}
			<div className="row">
				<Input title="<Input error />" error />
				<Input title={`&:hover`} error />
				<Input title={`&:focus`} error />
			</div>
			{/* Row 3 */}
			<div className="row">
				<Input title="<Input disabled />" disabled />
			</div>
			{/* Row 4 */}
			<div className="row">
				<Input title="<Input helperText=”Some interesting text” />" helperText="Some interesting text" />
				<Input title="<Input helperText=”Some interesting text” error />" helperText="Some interesting text" />
			</div>
			{/* Row 5 */}
			<div className="row">
				<Input title="<Input startIcon />" startIcon="call" />
				<Input title="<Input endIcon />" endIcon="lock" />
			</div>
			{/* Row 6 */}
			<div className="row">
				<Input title="<Input value='text' />" value="text" />
			</div>
			{/* Row 6 */}
			<div className="row">
				<Input title="<Input size='sm' />" size="sm" />
				<Input title="<Input size='md' />" size="md" />
			</div>
			{/* Row 7 */}
			<div className="row">
				<Input title="<Input fullWidth />" fullWidth />
			</div>
			{/* Row 8 */}
			<div className="row">
				<Input title="<Input multiline row=”4” />" multiline row="4" />
			</div>
		</div>
	);
}

export default App;
