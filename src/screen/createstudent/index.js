import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/button';
import './createstudent.css';
const Createstudent = () => {
	const [ year, setYear ] = useState('');
	const [ department, setDepartment ] = useState('');
	console.log(year);

	const formsubmit = () => {
		console.log('submit clicked');
	};
	return (
		<div className="studentcontainer">
			<div className="leftside">
				<div className="studentheader">
					<div className="total">
						<h2>25</h2>
						<p>Total students</p>
					</div>
					<div className="total">
						<h2>4</h2>
						<p>Total department</p>
					</div>
				</div>
				<h2>Create Student</h2>
				<div className="createform">
					<div className="input">
						<TextField id="outlined-basic" label="Enter Name" variant="outlined" />
						<TextField id="outlined-basic" label="Enter Roll no" variant="outlined" />
						<TextField id="outlined-basic" label="Enter password" variant="outlined" />
					</div>
					<div className="selects">
						<InputLabel id="demo-simple-select-label">year</InputLabel>
						<Select
							labelId="demo-simple-select-autowidth-label"
							id="demo-simple-select-autowidth"
							value={year}
							onChange={(e) => setYear(e.target.value)}
							autoWidth
							label="select year"
						>
							<MenuItem value={1}>1st year</MenuItem>
							<MenuItem value={2}>2nd year</MenuItem>
							<MenuItem value={3}>3rd year</MenuItem>
							<MenuItem value={4}>4th year</MenuItem>
						</Select>

						<InputLabel id="demo-simple-select-label">Department</InputLabel>
						<Select
							labelId="demo-simple-select-autowidth-label"
							id="demo-simple-select-autowidth"
							value={department}
							onChange={(e) => setDepartment(e.target.value)}
							autoWidth
							label="select department"
						>
							<MenuItem value={'cse'}>CSE</MenuItem>
							<MenuItem value={'mechanical'}>MECH</MenuItem>
							<MenuItem value={'ece'}>ECE</MenuItem>
							<MenuItem value={'eee'}>EEE</MenuItem>
							<MenuItem value={'civil'}>CIVIL</MenuItem>
						</Select>
					</div>
				</div>
				<Button height={40} width={'100%'} action={() => formsubmit()} name={'Submit'} />
			</div>
			<div className="rightside">right side</div>
		</div>
	);
};

export default Createstudent;
