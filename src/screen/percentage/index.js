import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import './percentage.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { InputLabel, TextField } from '@mui/material';
import Button from '../../components/button';
const Percentage = ({ checking }) => {
	const [ selection, setSelection ] = useState([]);
	console.log(selection);
	const deleteoption = (e) => {
		console.log(e.row);
	};

	const changesubmit = () => {
		console.log('chnage cunjsjsd');
	};
	const columns = [
		{ field: 'id', headerName: 'ID', width: 130 },
		{ field: 'studentname', headerName: 'Student Name', width: 230 },
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
	const rows = [
		{ id: 12343, studentname: 'Snow', rollno: 'Jon', year: 1, department: 'cse', percentage: 10, cgpa: 4.5 },
		{ id: 234, studentname: 'Lannister', rollno: 'Cersei', year: 1, department: 'cse' },
		{ id: 333, studentname: 'Lannister', rollno: 'Jaime', year: 1, department: 'mech' },
		{ id: 4443, studentname: 'Stark', rollno: 'Arya', year: 1, department: 'cse' },
		{ id: 534, studentname: 'Targaryen', rollno: 'Daenerys', year: 2, department: 'cse' },
		{ id: 634, studentname: 'Melisandre', rollno: null, year: 2, department: 'eee' },
		{ id: 723, studentname: 'Clifford', rollno: 'Ferrara', year: 2, department: 'cse' },
		{ id: 812, studentname: 'Frances', rollno: 'Rossini', year: 3, department: 'cse' },
		{ id: 92, studentname: 'Roxie', rollno: 'Harvey', year: 4, department: 'civil' }
	];
	return (
		<div className="percentagecontaner">
			<div className="percentleft">
				<h2 style={{ color: 'rgb(7,26,46)' }}>Select Student</h2>
				<div className="percentagetabel">
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
			<div className="percentright">
				<div className="selectedstudent">
					Selected Student
					{rows.filter((e) => e.id === selection[0]).map((e) => {
						return (
							<div style={{ marginTop: 15 }}>
								<div>
									Name : {'        '}
									{e.studentname}
								</div>
								<div>
									rollno : {'        '}
									{e.rollno}
								</div>
								<div>
									department : {'        '}
									{e.department}
								</div>
								<div>
									current percentage :{'        '}
									{e.percentage}/100
								</div>
								<div>
									current cgpa : {'        '}
									{e.cgpa}/10
								</div>
							</div>
						);
					})}
				</div>
				<div className="changeform">
					<div>
						<InputLabel id="demo-simple-select-label" style={{ marginBottom: 8 }}>
							Student attendance percentage
						</InputLabel>
						<TextField id="outlined-basic" label="Enter percentage" variant="outlined" />
					</div>
					<div>
						<InputLabel id="demo-simple-select-label" style={{ marginBottom: 8 }}>
							Student CGPA{' '}
						</InputLabel>
						<TextField id="outlined-basic" label="Enter cgpa" variant="outlined" />
					</div>
					<Button
						height={30}
						width={'50%'}
						action={() => changesubmit()}
						color={'rgba(21, 122, 255,.9)'}
						name={'change'}
						textcolor={'white'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Percentage;
