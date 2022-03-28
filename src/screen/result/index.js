import { TextField } from '@mui/material';
import React from 'react';
import './result.css'
const Result = () => {
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
</div>
	
	<p>Ti</p>
</div>
<div className="resultright">right</div>
	</div>)
};

export default Result;
