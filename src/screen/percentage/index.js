import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import './percentage.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { InputLabel, TextField } from '@mui/material';
import Button from '../../components/button';
import { motion } from 'framer-motion';
import axios from '../../api';
import Loader from '../../components/loader';
const Percentage = ({ studentlist }) => {
	const [ selection, setSelection ] = useState([]);
	const [ percentage, setPercentage ] = useState(0);
	const [ cgpa, setCgpa ] = useState('');
	const [ loading, setLoading ] = useState(false);
	console.log(selection);

	const changesubmit = async () => {
		setLoading(true)
		console.log('chnage cunjsjsd');
		if (selection.length === 0) {
			console.log('select is empty');
		} else {
			const data = { selection, percentage: percentage, cgpa: cgpa };
			console.log(data);
			const res = await axios.put('student/changepercentage', data);
			console.log(res.data);
			setLoading(false)
		}
	};
	const columns = [
		{ field: 'id', headerName: 'ID', width: 130 },
		{ field: 'name', headerName: 'Student Name', width: 230 },
		{ field: 'rollno', headerName: 'Roll no', width: 130 },
		{ field: 'year', headerName: 'year', width: 230 },
		{ field: 'department', headerName: 'Department', width: 230 },
		{ field: 'percentage', headerName: 'Percentage', width: 230 },
		{ field: 'cgpa', headerName: 'Cpga', width: 230 }
	];

	return (
		<motion.div
			className="percentagecontaner"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{loading?
				<Loader />:
		<>
			<div className="percentleft">
				<h2 style={{ color: 'rgb(7,26,46)' }}>Select Student</h2>
				<div className="percentagetabel">
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
			<div className="percentright">
				<div className="selectedstudent">
					Selected Student
					{studentlist.filter((e) => e.id === selection[0]).map((e) => {
						return (
							<div style={{ marginTop: 15 }}>
								<div>
									Name : {'        '}
									{e.name}
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
						<TextField
							id="outlined-basic"
							label="Enter percentage"
							variant="outlined"
							type="number"
							onChange={(e) => setPercentage(e.target.value)}
						/>
					</div>
					<div>
						<InputLabel id="demo-simple-select-label" style={{ marginBottom: 8 }}>
							Student CGPA{' '}
						</InputLabel>
						<TextField
							type="number"
							id="outlined-basic"
							label="Enter cgpa"
							variant="outlined"
							onChange={(e) => setCgpa(e.target.value)}
						/>
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
			</>
}
		</motion.div>
	);
};

export default Percentage;
