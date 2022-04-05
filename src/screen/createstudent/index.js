import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/button';
import './createstudent.css';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SchoolIcon from '@mui/icons-material/School';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Axios from '../../api';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
const Createstudent = ({ studentlist }) => {
	console.log('this from create pagejj', studentlist);
	const [ selection, setSelection ] = useState([]);
	const [ rollno, setRollno ] = useState('');
	const [ sname, setSname ] = useState('');
	const [ spassword, setSPassword ] = useState('');
	const [ dept, setDept ] = useState('');
	const [ sem, setSem ] = useState('');
	const [ year, setYear ] = useState('');
	const [ cgpa, setCgpa ] = useState(0);
	const [ percentage, setPercentage ] = useState(0);

	//delete the student

	console.log('checking student selection', selection);

	//new create student
	const Studentsubmit = async (e) => {
		console.log('checking');
		const id = uuidv4();
		console.log('checkjigid ', id);
		const data = {
			rollno: rollno.toUpperCase(),
			name: sname.toUpperCase(),
			percentage: percentage,
			password: spassword.toUpperCase(),
			department: dept,
			year: year,
			id: id,
			semester: sem,
			cgpa: cgpa
		};
		console.log(data);
		const res = await Axios.post('student/create', data);
		console.log(res.data);
	};

	const yearchange = async () => {
		if (selection.length === 0) {
			console.log('selection is empty');
		} else {
			console.log('year chnag elciked');
			const data = { selection, year: year };
			const res = await Axios.put('student/changeyear', data);
			console.log(res.data);
		}
	};
	const deptchange = async () => {
		if (selection.length === 0) {
			console.log('selection is empty');
		} else {
			console.log('dept change');
			const data = { selection, dept: dept };
			const res = await Axios.put('student/changedept', data);
			console.log(res.data);
		}
	};
	const rollnochange = async () => {
		console.log(rollno.toUpperCase());
		const rno = rollno.toUpperCase();
		if (selection.length === 1) {
			console.log('roolnum clicked');
			const data = { selection, rollno: rno };
			const res = await Axios.put('student/changerollno', data);
			console.log(res.data);
		} else {
			console.log('only one student  change  rollno can be change');
		}
	};
	const namechange = async () => {
		console.log('name chnag elciked');
		console.log(sname.toUpperCase());
		const studentname = sname.toUpperCase();
		if (selection.length === 1) {
			const data = { selection, name: studentname };
			const res = await Axios.put('student/changename', data);
			console.log(res.data);
		} else {
			console.log('only one student  change  name can be change');
		}
	};
	const semchange = async () => {
		if (selection.length === 0) {
			console.log('selection is empty');
		} else {
			console.log('sem change');
			const data = { selection, sem: sem };
			const res = await Axios.put('student/changesem', data);
			console.log(res.data);
		}
	};
	const deleteoption = async (e) => {
		console.log('deleted id', e.row.id);
		const deletedid = e.row;
		const data = { id: e.row.id };
		const res = await Axios.put('student/deletestudent', data);
		console.log(res.data);
	};

	//columm for table
	const columns = [
		{ field: 'id', headerName: 'ID', width: 130 },
		{ field: 'name', headerName: 'Student Name', width: 230 },
		{ field: 'rollno', headerName: 'Roll no', width: 130 },
		{ field: 'year', headerName: 'year', width: 230 },
		{ field: 'semester', headerName: 'Semester', width: 230 },
		{ field: 'department', headerName: 'Department', width: 230 },
		{ field: 'percentage', headerName: 'Percentage', width: 230 },
		{ field: 'cgpa', headerName: 'Cpga', width: 230 },
		{
			field: 'delete',
			headerName: 'Delete',
			width: 130,
			renderCell: (e) => {
				return (
					<div onClick={() => deleteoption(e)} style={{ textAlign: 'center', cursor: 'pointer' }}>
						<DeleteOutlineIcon style={{ color: 'red', fontSize: 35 }} />
					</div>
				);
			}
		}
	];
	return (
		<motion.div
			className="studentcontainer"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1.5 }}
			exit={{ opacity: 0 }}
		>
			<div className="leftside">
				<div className="studentheader">
					<div className="total">
						<h1>{studentlist.length}</h1>
						<div style={{ display: 'flex' }}>
							<PersonPinIcon style={{ fontSize: 35 }} />
							<p>Total students</p>
						</div>
					</div>
					<div className="total2">
						<h1>5</h1>
						<div style={{ display: 'flex' }}>
							<SchoolIcon style={{ fontSize: 35 }} />
							<p>Total department</p>
						</div>
					</div>
				</div>
				<h2 style={{ color: 'rgb(7,26,46)' }}>Create Student</h2>
				<div className="createforms">
					<div className="input">
						<div>
							<InputLabel id="demo-simple-select-label">Enter Student Name</InputLabel>
							<TextField
								id="outlined-basic"
								label="Enter Name"
								variant="outlined"
								onChange={(e) => setSname(e.target.value)}
							/>
						</div>
						<div>
							<InputLabel id="demo-simple-select-label">Enter Student Roll no</InputLabel>
							<TextField
								id="outlined-basic"
								label="Enter Roll no"
								variant="outlined"
								onChange={(e) => setRollno(e.target.value)}
							/>
						</div>
						<div>
							<InputLabel id="demo-simple-select-label">Enter password</InputLabel>
							<TextField
								id="outlined-basic"
								label="Enter password"
								variant="outlined"
								onChange={(e) => setSPassword(e.target.value)}
							/>
						</div>
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
							value={dept}
							onChange={(e) => setDept(e.target.value)}
							autoWidth
							label="select department"
						>
							<MenuItem value={'cse'}>CSE</MenuItem>
							<MenuItem value={'mechanical'}>MECH</MenuItem>
							<MenuItem value={'ece'}>ECE</MenuItem>
							<MenuItem value={'eee'}>EEE</MenuItem>
							<MenuItem value={'civil'}>CIVIL</MenuItem>
						</Select>
						<InputLabel id="demo-simple-select-label">Semester</InputLabel>
						<Select
							labelId="demo-simple-select-autowidth-label"
							id="demo-simple-select-autowidth"
							value={sem}
							onChange={(e) => setSem(e.target.value)}
							autoWidth
							label="select department"
						>
							<MenuItem value={'1'}>1st</MenuItem>
							<MenuItem value={'2'}>2nd</MenuItem>
							<MenuItem value={'3'}>3rd</MenuItem>
							<MenuItem value={'4'}>4th</MenuItem>
							<MenuItem value={'5'}>5th</MenuItem>
							<MenuItem value={'6'}>6th</MenuItem>
							<MenuItem value={'7'}>7th</MenuItem>
							<MenuItem value={'8'}>8th</MenuItem>
						</Select>
					</div>
				</div>
				<div style={{ display: 'flex', gap: 10 }}>
					<Button
						height={40}
						width={'20%'}
						action={() => Studentsubmit()}
						color={'rgba(21, 122, 255,.9)'}
						name={'Submit'}
						textcolor={'white'}
					/>
				</div>
			</div>
			<div className="rightside">
				<div className="tablecontainer">
					<h2 style={{ color: 'rgb(7,26,46)' }}>All Students</h2>
					<div className="tables">
						<DataGrid
							rows={studentlist}
							columns={columns}
							checkboxSelection
							pageSize={8}
							hideFooterPagination
							onSelectionModelChange={(e) => {
								setSelection(e);
							}}
							options={{ selection: true }}
						/>
					</div>
				</div>
				<div className="editingcontainer">
					<h2 style={{ color: 'rgb(7,26,46)' }}>Edit Section</h2>
					<p style={{ color: 'rgba(7,26,46,.5)' }}>Total selection :</p>
					<div className="editing">
						<div className="editbox">
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Semester</p>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								value={sem}
								onChange={(e) => setSem(e.target.value)}
								autoWidth
								label="select semester"
							>
								<MenuItem value={'1'}>1st</MenuItem>
								<MenuItem value={'2'}>2nd</MenuItem>
								<MenuItem value={'3'}>3rd</MenuItem>
								<MenuItem value={'4'}>4th</MenuItem>
								<MenuItem value={'5'}>5th</MenuItem>
								<MenuItem value={'6'}>6th</MenuItem>
								<MenuItem value={'7'}>7th</MenuItem>
								<MenuItem value={'8'}>8th</MenuItem>
							</Select>
							<Button
								height={30}
								width={'100%'}
								action={() => semchange()}
								name={'Change'}
								size={13}
								color={' rgba(243, 229, 36,.44)'}
								textcolor={'black'}
							/>
						</div>
						<div className="editbox">
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Year</p>
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
							<Button
								height={30}
								width={'100%'}
								action={() => yearchange()}
								color={'rgba(9,0,99,.09)'}
								size={13}
								textcolor={'rgb(9,0,99)'}
								name={'Change'}
							/>
						</div>

						<div className="editbox">
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Department</p>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								value={dept}
								onChange={(e) => setDept(e.target.value)}
								autoWidth
								label="select department"
							>
								<MenuItem value={'cse'}>CSE</MenuItem>
								<MenuItem value={'mechanical'}>MECH</MenuItem>
								<MenuItem value={'ece'}>ECE</MenuItem>
								<MenuItem value={'eee'}>EEE</MenuItem>
								<MenuItem value={'civil'}>CIVIL</MenuItem>
							</Select>
							<Button
								height={30}
								width={'100%'}
								action={() => deptchange()}
								name={'Change'}
								size={13}
								color={'rgba(234,74,134,.09)'}
								textcolor={'rgb(234,74,134)'}
							/>
						</div>

						<div className="editbox">
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Roll no</p>
							<TextField
								id="outlined-basic"
								label="Enter Roll no"
								variant="outlined"
								onChange={(e) => setRollno(e.target.value)}
							/>
							<Button
								height={30}
								width={'100%'}
								action={() => rollnochange()}
								name={'Change'}
								color={'rgba(34,213,99,.09)'}
								textcolor={'rgb(34,213,99)'}
								size={13}
							/>
						</div>

						<div className="editbox">
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Name</p>
							<TextField
								id="outlined-basic"
								label="Enter Name"
								variant="outlined"
								onChange={(e) => setSname(e.target.value)}
							/>
							<Button
								height={30}
								width={'100%'}
								size={13}
								action={() => namechange()}
								name={'Change'}
								color={'rgba(21,122,255,.09)'}
								textcolor={'rgb(21,122,255)'}
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Createstudent;
