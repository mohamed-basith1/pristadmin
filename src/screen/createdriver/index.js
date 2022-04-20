import './createdriver.css';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import Button from '../../components/button';
import './createdriver.css';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import Axios from '../../api';
import Loader from '../../components/loader';
const Createdriver = ({ driverlist, action }) => {
	const [ phone, setPhone ] = useState(0);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ busno, setBusno ] = useState('');
	const [ selection, setSelection ] = useState('');
	const [ loading, setLoading ] = useState(false);
	console.log('selection driver', selection);

	const deleteoption = async (e) => {
		setLoading(true)
		console.log('i am, delte fyuction', e.row.id);
		console.log('deleted id', e.row.id);
		const data = { id: e.row.id };
		const res = await Axios.put('driver/deletedriver', data);
		console.log(res.data);
		if(res.status==200){
			action()
			setLoading(false)
		}
	};

	const formsubmit = async () => {
		if (!name == '') {
			if (!phone == 0) {
				if (!email == '') {
					if (!password == '') {
						if (!busno == '') {
							setLoading(true);
							console.log('submit clicked');
							const id = uuidv4();
							const data = {
								name: name.toUpperCase(),
								email: email.toLowerCase(),
								phone: phone,
								password: password,
								busno: busno,
								id: id
							};
							console.log(data);
							const res = await Axios.post('driver/create', data);
							console.log(res.data);

							if (res.status == 200) {
								action();
								setLoading(false);
							}
						} else {
							alert('  bus number is Empty');
						}
					} else {
						alert(' password is Empty');
					}
				} else {
					alert('Email is Empty');
				}
			} else {
				alert(' phone Number is Empty');
			}
		} else {
			alert('  Driver Name is Empty');
		}
	};

	//driver name change
	const changename = async () => {
		console.log('name');
		setLoading(true)
		if (selection.length === 1) {
			const data = { selection, name: name.toUpperCase() };
			console.log(data);
			const res = await Axios.put('driver/changename', data);
			console.log(res.data);
			if(res.status==200){
				setLoading(false)
			}
		} else {
			console.log('select one driver');
		}
	};

	//email change
	const changeemail = async () => {
		console.log('email');
		setLoading(true)
		if (selection.length === 1) {
			const data = { selection, email: email };
			console.log(data);
			const res = await Axios.put('driver/changeemail', data);
			console.log(res.data);
			if(res.status==200){
				setLoading(false)
			}
		} else {
			console.log('select one driver');
		}
	};

	//bus number schange
	const changebusno = async () => {
		console.log('bus');
		setLoading(true)
		if (selection.length === 1) {
			const data = { selection, busno: busno };
			console.log(data);
			const res = await Axios.put('driver/changebusno', data);
			console.log(res.data);
			if(res.status==200){
				setLoading(false)
			}
		} else {
			console.log('select one driver');
		}
	};

	//phone number change
	const changephone = async () => {
		console.log('phone');
		setLoading(true)
		if (selection.length === 1) {
			const data = { selection, phone: phone };
			console.log(data);
			const res = await Axios.put('driver/changephone', data);
			console.log(res.data);
			if(res.status==200){
				setLoading(false)
			}
		} else {
			console.log('select one driver');
		}
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 130 },
		{ field: 'name', headerName: 'Driver Name', width: 230 },
		{ field: 'email', headerName: 'Email', width: 130 },
		{ field: 'phone', headerName: 'Phone no', width: 230 },
		{ field: 'busno', headerName: 'Bus no', width: 230 },
		{ field: 'status', headerName: 'Status', width: 230 },
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
	return (
		<motion.div
			className="studentcontainer"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1.5 }}
			exit={{ opacity: 0 }}
		>
			{loading?
				<Loader />:
		<>
			<div className="leftside">
				<div className="studentheader">
					<div className="total">
						<h1>{driverlist.length}</h1>
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
								<TextField
									id="outlined-basic"
									label="Enter Name"
									variant="outlined"
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<InputLabel id="demo-simple-select-label">Enter Email</InputLabel>
								<TextField
									id="outlined-basic"
									label="Enter Roll no"
									variant="outlined"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<div>
							<div>
								<InputLabel id="demo-simple-select-label">Enter phone number</InputLabel>
								<TextField
									id="outlined-basic"
									label="Enter password"
									variant="outlined"
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>

							<div>
								<InputLabel id="demo-simple-select-label">Enter password</InputLabel>
								<TextField
									id="outlined-basic"
									label="Enter password"
									variant="outlined"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div>
								<InputLabel id="demo-simple-select-label">Enter busno</InputLabel>
								<TextField
									id="outlined-basic"
									label="Enter bus no"
									variant="outlined"
									onChange={(e) => setBusno(e.target.value)}
								/>
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
							rows={driverlist}
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
							<TextField
								id="outlined-basic"
								label="Enter Name"
								variant="outlined"
								onChange={(e) => setName(e.target.value)}
							/>
							<Button
								height={30}
								width={'100%'}
								action={() => changename()}
								color={'rgba(9,0,99,.09)'}
								size={13}
								textcolor={'rgb(9,0,99)'}
								name={'Change'}
							/>
						</div>

						<div className="editbox">
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Phone no</p>
							<TextField
								id="outlined-basic"
								label="Enter Phone no"
								variant="outlined"
								onChange={(e) => setPhone(e.target.value)}
							/>
							<Button
								height={30}
								width={'100%'}
								action={() => changephone()}
								name={'Change'}
								size={13}
								color={'rgba(234,74,134,.09)'}
								textcolor={'rgb(234,74,134)'}
							/>
						</div>

						<div className="editbox">
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Bus no</p>
							<TextField
								id="outlined-basic"
								label="Enter Bus no"
								variant="outlined"
								onChange={(e) => setBusno(e.target.value)}
							/>
							<Button
								height={30}
								width={'100%'}
								action={() => changebusno()}
								name={'Change'}
								color={'rgba(34,213,99,.09)'}
								textcolor={'rgb(34,213,99)'}
								size={13}
							/>
						</div>

						<div className="editbox">
							<p style={{ fontSize: 15, fontWeight: 500, color: 'rgb(7,26,46)' }}>Email</p>
							<TextField
								id="outlined-basic"
								label="Enter Email"
								variant="outlined"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Button
								height={30}
								width={'100%'}
								size={13}
								action={() => changeemail()}
								name={'Change'}
								color={'rgba(21,122,255,.09)'}
								textcolor={'rgb(21,122,255)'}
							/>
						</div>
					</div>
				</div>
			</div>
			</>
}
		</motion.div>
	);
};
export default Createdriver;
