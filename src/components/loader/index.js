import { CircularProgress } from '@mui/material';
import React from 'react';

function Loader() {
	return (
		<div
			style={{
				position: 'absolute',
				zIndex: '700',
				width: '100%',
				height: '100vh',
				background: 'rgba(0,0,0,.8)',
				top: 0,
				left: 0,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				color: 'white'
			}}
		>
			<CircularProgress style={{ color: 'white', fontSize: 80 }} />
			Loading...
		</div>
	);
}

export default Loader;
