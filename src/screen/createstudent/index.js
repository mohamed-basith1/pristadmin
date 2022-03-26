import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/button';
import './createstudent.css';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SchoolIcon from '@mui/icons-material/School';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Createstudent = () => {
	const [ year, setYear ] = useState('');
	const [ department, setDepartment ] = useState('');
	const [ selection, setSelection ] = useState([]);

	const formsubmit = () => {
		console.log('submit clicked');
	};
	const deleteoption = (e) => {
		console.log(e.row);
	};
	const columns = [
		{ field: 'id', headerName: 'ID', width: 130 },
		{ field: 'studentname', headerName: 'Student Name', width: 230 },
		{ field: 'rollno', headerName: 'Roll no', width: 130 },
		{ field: 'year', headerName: 'year', width: 230 },
		{ field: 'department', headerName: 'Department', width: 230 },
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
	const rows = [
		{ id: 12343, studentname: 'Snow', rollno: 'Jon', year: 1, department: 'cse' },
		{ id: 234, studentname: 'Lannister', rollno: 'Cersei', year: 1, department: 'cse' },
		{ id: 333, studentname: 'Lannister', rollno: 'Jaime', year: 1, department: 'mech' },
		{ id: 4443, studentname: 'Stark', rollno: 'Arya', year: 1, department: 'cse' },
		{ id: 534, studentname: 'Targaryen', rollno: 'Daenerys', year: 2, department: 'cse' },
		{ id: 634, studentname: 'Melisandre', rollno: null, year: 2, department: 'eee' },
		{ id: 723, studentname: 'Clifford', rollno: 'Ferrara', year: 2, department: 'cse' },
		{ id: 812, studentname: 'Frances', rollno: 'Rossini', year: 3, department: 'cse' },
		{ id: 92, studentname: 'Roxie', rollno: 'Harvey', year: 4, department: 'civil' }
	];

	const testing = () => {
		console.log('selected itemsssss', selection);
	};

	return (
		<div className="studentcontainer">
			<div className="leftside">
				<div className="studentheader">
					<div className="total">
						<h1>25</h1>
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
							<TextField id="outlined-basic" label="Enter Name" variant="outlined" />
						</div>
						<div>
							<InputLabel id="demo-simple-select-label">Enter Student Roll no</InputLabel>
							<TextField id="outlined-basic" label="Enter Roll no" variant="outlined" />
						</div>
						<div>
							<InputLabel id="demo-simple-select-label">Enter password</InputLabel>
							<TextField id="outlined-basic" label="Enter password" variant="outlined" />
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
				<div style={{ display: 'flex', gap: 10 }}>
					<Button
						height={40}
						width={'20%'}
						action={() => formsubmit()}
						color={'rgba(21, 122, 255,.9)'}
						name={'Submit'}
						textcolor={'white'}
					/>
					<Button height={40} width={'20%'} action={() => formsubmit()} textcolor={'red'} name={'cancel'} />
				</div>
			</div>
			<div className="rightside">
				<div className="tablecontainer">
					<h2 style={{ color: 'rgb(7,26,46)' }}>All Students</h2>
					<div className="tables">
						<DataGrid
							rows={rows}
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
								action={() => formsubmit()}
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
							<Button
								height={30}
								width={'100%'}
								action={() => formsubmit()}
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
								action={() => formsubmit()}
								name={'Change'}
								color={'rgba(34,213,99,.09)'}
								textcolor={'rgb(34,213,99)'}
								size={13}
							/>
						</div>

						<div className="editbox">
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Name</p>
							<TextField id="outlined-basic" label="Enter Roll no" variant="outlined" />
							<Button
								height={30}
								width={'100%'}
								size={13}
								action={() => formsubmit()}
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
