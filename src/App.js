import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './css/App.css'
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import SecondSection from './components/SecondSection';

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/" exact component={MainSection} />
			<Route path="/#graphics" exact component={SecondSection} />
		</Router>
	);
}

export default App;
