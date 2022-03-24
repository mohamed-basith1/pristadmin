import React from 'react';

const Button = ({ height, width, action, name }) => {
	return (
		<div
			onClick={() => action()}
			style={{
				height: height,
				color: 'white',
				borderRadius: 10,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
				width: width,
				background: 'rgb(68,24,146)'
			}}
		>
			{name}
		</div>
	);
};

export default Button;
