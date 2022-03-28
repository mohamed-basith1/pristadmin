import { TextField } from '@mui/material';
import React from 'react';
import './result.css'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '../../components/button';
const Result = () => {
	const formsubmit=()=>{
		console.log("hi")
	}
	return (<div className='resultcontainer'>
<div className="resultleft">
	<h2 style={{color:"rgb(7,26,46)"}}>Upload Result</h2>
	<div className="resultform">

	
<div className='resulttitle'>
<p>Title</p>
<TextField id="outlined-basic" label="Enter Name" variant="outlined"  style={{width:"100%"}}/>
</div>
<div className='resulttitle'>
<p>Description</p>
<TextField id="outlined-basic" label="Enter Name" variant="outlined"  style={{width:"100%"}}/>
</div>


<div className='uploadcontainer'>
	<CloudUploadIcon style={{fontSize:60}} />
	
	Upload Result
	
	</div>
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
<div className="resultright">right</div>
	</div>)
};

export default Result;
