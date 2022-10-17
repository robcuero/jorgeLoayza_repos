import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/organisms/home';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='*'>
					<h1>not found</h1>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
