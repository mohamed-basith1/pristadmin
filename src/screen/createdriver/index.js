import './createdriver.css';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/button';
import './createdriver.css';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Createdriver = () => {
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
		{ field: 'name', headerName: 'Driver Name', width: 230 },
		{ field: 'email', headerName: 'Email', width: 130 },
		{ field: 'phone', headerName: 'Phone no', width: 230 },
		{ field: 'busno', headerName: 'Bus no', width: 230 },
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
		{ id: 12343, name: 'Snow', email: 'Jon', phone: 1, busno: 'cse' },
		{ id: 234, name: 'Lannister', email: 'Cersei', phone: 1, busno: 'cse' },
		{ id: 333, name: 'Lannister', email: 'Jaime', phone: 1, busno: 'mech' },
		{ id: 4443, name: 'Stark', email: 'Arya', phone: 1, busno: 'cse' },
		{ id: 534, name: 'Targaryen', email: 'Daenerys', phone: 2, busno: 'cse' },
		{ id: 634, name: 'Melisandre', email: 'basith', phone: 2, busno: 'eee' },
		{ id: 723, name: 'Clifford', email: 'Ferrara', phone: 2, busno: 'cse' },
		{ id: 812, name: 'Frances', email: 'Rossini', phone: 3, busno: 'cse' },
		{ id: 92, name: 'Roxie', email: 'Harvey', phone: 4, busno: 'civil' }
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
							<DirectionsBusFilledOutlinedIcon style={{ fontSize: '35' }} />
							<p>Total Drivers</p>
						</div>
					</div>
				</div>
				<h2 style={{ color: 'rgb(7,26,46)' }}>Create Driver</h2>
				<div className="driverform">
					<div className="inputss">
						<div>
							<div>
								<InputLabel id="demo-simple-select-label">Enter Driver Name</InputLabel>
								<TextField id="outlined-basic" label="Enter Name" variant="outlined" />
							</div>
							<div>
								<InputLabel id="demo-simple-select-label">Enter Email</InputLabel>
								<TextField id="outlined-basic" label="Enter Roll no" variant="outlined" />
							</div>
						</div>
						<div>
							<div>
								<InputLabel id="demo-simple-select-label">Enter phone number</InputLabel>
								<TextField id="outlined-basic" label="Enter password" variant="outlined" />
							</div>

							<div>
								<InputLabel id="demo-simple-select-label">Enter password</InputLabel>
								<TextField id="outlined-basic" label="Enter password" variant="outlined" />
							</div>
						</div>
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
					<h2 style={{ color: 'rgb(7,26,46)' }}>All Drivers</h2>
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
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Name</p>
							<TextField id="outlined-basic" label="Enter Name" variant="outlined" />
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
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Phone no</p>
							<TextField id="outlined-basic" label="Enter Phone no" variant="outlined" />
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
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Bus no</p>
							<TextField id="outlined-basic" label="Enter Bus no" variant="outlined" />
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
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Email</p>
							<TextField id="outlined-basic" label="Enter Email" variant="outlined" />
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
export default Createdriver;
