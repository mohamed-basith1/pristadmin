import React, { useState } from 'react';
import './nav.css';
import { useNavigate } from 'react-router-dom';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import logo from '../../assets/pristlogo.png';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
const Nav = () => {
	const navigation = useNavigate();
	const [ navi, setNavi ] = useState(0);
	const navigationlist = [
		{
			link: '/createstudent',
			name: 'Create Student',
			number: 0,
			icon: <PermIdentityOutlinedIcon style={{ fontSize: '35' }} />
		},
		{
			link: '/createdriver',
			name: 'Create driver',
			number: 1,
			icon: <DirectionsBusFilledOutlinedIcon style={{ fontSize: '35' }} />
		},
		{ link: '/', name: 'Percentage', number: 2, icon: <PercentOutlinedIcon style={{ fontSize: '35' }} /> },
		{ link: '/result', name: 'result', number: 3, icon: <ReceiptLongOutlinedIcon style={{ fontSize: '35' }} /> },

		{ link: '/circular', name: 'Circular', number: 4, icon: <MailOutlineOutlinedIcon style={{ fontSize: '35' }} /> }
	];
	const changenav = (e) => {
		setNavi(e.number);
		navigation(e.link);
	};
	return (
		<div className="navcontainer">
			<div className="logo">
				<div style={{ width: 130, height: 130, borderRadius: 50 }}>
					<img src={logo} style={{ height: '100%' }} />
				</div>
				<h3>PRIST ADMINPANAL</h3>
			</div>
			<div className="navigationlist">
				{navigationlist.map((e, index) => {
					return (
						<div className={index === navi ? 'alllinkactive' : 'alllinknoactive'}>
							<div className={index === navi ? 'active' : 'noactive'} onClick={() => changenav(e)}>
								{e.icon}
								{e.name}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Nav;
