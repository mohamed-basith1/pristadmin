import { TextField } from '@mui/material';
import React from 'react';
import './circular.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '../../components/button';
import { motion } from 'framer-motion';
import ReceiptIcon from '@mui/icons-material/Receipt';
const Result = () => {
	const formsubmit = () => {
		console.log('hi');
	};
	return (
		<motion.div
			className="resultcontainer"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1.5 }}
			exit={{ opacity: 0 }}
		>
			<div className="resultleft">
				<h2 style={{ color: 'rgb(7,26,46)' }}>Send Circular</h2>
				<div className="resultform">
					<div className="resulttitle">
						<p>Title</p>
						<TextField
							id="outlined-basic"
							label="Enter Name"
							variant="outlined"
							style={{ width: '100%' }}
						/>
					</div>
					<div className="resulttitle">
						<p>Description</p>
						<TextField
							id="outlined-basic"
							label="Enter Name"
							variant="outlined"
							style={{ width: '100%' }}
						/>
					</div>

					<label htmlFor="uploadfile" className="uploadcontainer">
						<CloudUploadIcon style={{ fontSize: 60 }} />
						Upload circular
						<input id="uploadfile" type="file" style={{ display: 'none' }} />
					</label>
					<Button
						height={40}
						width={'80%'}
						action={() => formsubmit()}
						color={'rgba(21, 122, 255,.9)'}
						name={'Submit'}
						textcolor={'white'}
					/>
				</div>
			</div>
			<div className="resultright">
				<p> Total circular history</p>

				<div className="historycontainer">
					<div className="historylist">
						<div>
							<ReceiptIcon style={{ fontSize: 55, color: 'rgba(21, 122, 255)' }} />
						</div>
						<div className="titles">
							<div>6th semester result</div>
							<div>4th year cse</div>
						</div>

						<div className="date">date:30/03/2022</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Result;
