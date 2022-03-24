import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Circular from './screen/circular';
import Createdriver from './screen/createdriver';
import Createstudent from './screen/createstudent';
import Percentage from './screen/percentage';
const App = () => {
	return (
		<div>
			<p>hi</p>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Percentage />} />
					<Route path="/circular" element={<Circular />} />
					<Route path="/createdriver" element={<Createdriver />} />
					<Route path="/createstudent" element={<Createstudent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
