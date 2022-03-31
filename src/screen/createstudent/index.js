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
	const deleteoption = (e) => {
		console.log(e.row);
	};
	console.log('checking student selection', selection);

	//new create student
	const Studentsubmit = async (e) => {
		console.log('checking');
		const id = uuidv4();
		console.log('checkjigid ', id);
		const data = {
			rollno: rollno,
			name: sname,
			percentage: percentage,
			password: spassword,
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

	//columm for table
	const columns = [
		{ field: 'id', headerName: 'ID', width: 130 },
		{ field: 'name', headerName: 'Student Name', width: 230 },
		{ field: 'rollno', headerName: 'Roll no', width: 130 },
		{ field: 'year', headerName: 'year', width: 230 },
		{ field: 'department', headerName: 'Department', width: 230 },
		{ field: 'percentage', headerName: 'Percentage', width: 230 },
		{ field: 'cgpa', headerName: 'Cpga', width: 230 },
		{
			field: 'delete',
			headerName: 'Delete',
			width: 130,
			renderCell: (e) => {
				return (
					<div onClick={() => deleteoption(e)} style={{ textAlign: 'center' }}>
						<DeleteOutlineIcon style={{ color: 'red', fontSize: 35 }} />
					</div>
				);
			}
		}
	];

	const yearchange = async () => {
		console.log('year chnag elciked');
	};
	const deptchange = () => {
		console.log('dept chnag elciked');
	};
	const rollnochange = () => {
		console.log('roll chnag elciked');
	};
	const namechange = () => {
		console.log('name chnag elciked');
	};

	return (
		<div className="studentcontainer">
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
							<TextField id="outlined-basic" label="Enter Roll no" variant="outlined" />
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
							<TextField id="outlined-basic" label="Enter Name" variant="outlined" />
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
		</div>
	);
};

export default Createstudent;
