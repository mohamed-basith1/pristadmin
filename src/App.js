import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Circular from './screen/circular';
import Createdriver from './screen/createdriver';
import Createstudent from './screen/createstudent';
import Percentage from './screen/percentage';
import './App.css';
import Nav from './components/nav';
import Result from './screen/result';
import Axios from './api';

const App = () => {
	const basith = [ 'basityh i am, props' ];
	const [ studentlist, setStudentlist ] = useState([]);
	const [ driverlist, setDriverlist ] = useState([]);
	useEffect(() => {
		getstudentlist();
		getdriverlist();
	}, []);

	const getstudentlist = async () => {
		console.log('student list get');
		const allstudentlist = await Axios.get('student/allstudentdetails');
		console.log(allstudentlist.data);
		setStudentlist(allstudentlist.data);
	};

	const getdriverlist = () => {
		console.log('get driver liost');
	};
	return (
		<div className="appcontainer">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Percentage checking={basith} />} />
					<Route path="/circular" element={<Circular />} />
					<Route path="/createdriver" element={<Createdriver />} />
					<Route path="/createstudent" element={<Createstudent studentlist={studentlist} />} />
					<Route path="/result" element={<Result />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
