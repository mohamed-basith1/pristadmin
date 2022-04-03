import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Circular from './screen/circular';
import Createdriver from './screen/createdriver';
import Createstudent from './screen/createstudent';
import Percentage from './screen/percentage';
import './App.css';
import Nav from './components/nav';
import Result from './screen/result';
import Axios from './api';
import { AnimatePresence } from 'framer-motion';
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

	const getdriverlist = async () => {
		console.log('get driver liost');
		const alldriverlist = await Axios.get('driver/alldriverdetails');
		setDriverlist(alldriverlist.data);
		console.log(alldriverlist.data);
	};

	return (
		<div className="appcontainer">
			<BrowserRouter>
				<Nav />
				<AnimatePresence>
					<Routes>
						<Route path="/" element={<Createstudent studentlist={studentlist} />} />
						<Route path="/circular" element={<Circular />} />
						<Route path="/createdriver" element={<Createdriver driverlist={driverlist} />} />
						<Route path="/percentage" element={<Percentage studentlist={studentlist} />} />
						<Route path="/result" element={<Result />} />
					</Routes>
				</AnimatePresence>
			</BrowserRouter>
		</div>
	);
};

export default App;
