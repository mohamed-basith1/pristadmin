import React from 'react';

const Button = ({ height, width, action, name, color, textcolor, size }) => {
	return (
		<div
			onClick={() => action()}
			style={{
				height: height,
				color: textcolor,
				borderRadius: 20,
				fontSize: size,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
				width: width,
				background: color
			}}
		>
			{name}
		</div>
	);
};

export default Button;
