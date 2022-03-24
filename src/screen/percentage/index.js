import { TextField } from '@mui/material';
import React from 'react';
import './percentage.css';
const Percentage = () => {
	return (
		<div className="percentagecontaner">
			<div>Percentage</div>
			<TextField id="outlined-basic" label="name" variant="outlined" />
		</div>
	);
};

export default Percentage;
