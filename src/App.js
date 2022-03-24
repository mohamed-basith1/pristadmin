import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Circular from './screen/circular';
import Createdriver from './screen/createdriver';
import Createstudent from './screen/createstudent';
import Percentage from './screen/percentage';
import './App.css';
import Nav from './components/nav';
import Result from './screen/result';
const App = () => {
	return (
		<div className="appcontainer">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Percentage />} />
					<Route path="/circular" element={<Circular />} />
					<Route path="/createdriver" element={<Createdriver />} />
					<Route path="/createstudent" element={<Createstudent />} />
					<Route path="/result" element={<Result />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
