import { TextField, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState,useEffect } from 'react';
import './result.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '../../components/button';
import { motion } from 'framer-motion';
import { storage } from '../../firebase';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { ref, uploadBytes, getDownloadURL,deleteObject } from 'firebase/storage';
import Axios from '../../api';
import Loader from '../../components/loader';
import { v4 as uuidv4 } from 'uuid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Result = () => {
	const [ year, setYear ] = useState('');
	const [ dept, setDept ] = useState('');
	const [ sem, setSem ] = useState('');
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ image, setImage ] = useState('');
    const [loading,setLoading]=useState(false)
    const [history,setHistory]=useState([])
  

useEffect(()=>{
	getresulthistory()
},[loading])
 

const getresulthistory=async()=>{
	const res = await Axios.get('/student/resulthistory')
	console.log(res.data)
	setHistory(res.data)
}
	const formsubmit = async () => {
	if(!title.length==0 && !description.length==0){
	
		if(!sem.length==0  && year > 0){
		
			if(!dept.length==0 && !image==" "){
				imageclicked();
				setYear("")
				setDept("")
				setTitle("")
				setSem("")
				setDescription("")
				setImage("")
		        setLoading(true)
			}
		
		}
		
	}
		
	};



	const deleteclick=async(e)=>{
		setLoading(true)
console.log(e)

const res = await Axios.put('/student/deleteresult',e)
console.log("delete resond",res.data)




// Create a reference to the file to delete
const desertRef = ref(storage, `results/${e.year}-year-${e.dept}-${e.sem}-sem-results`);

// Delete the file
deleteObject(desertRef).then(() => {
  console.log("delete succesfully")
}).catch((error) => {
  // Uh-oh, an error occurred!
  console.log("imgae deleting error",error)
});


if(res.status==200){
	setLoading(false)
   }
	}

	const imageclicked = async () => {
		console.log(image);
		const storageRef = await ref(storage, `results/${year}-year-${dept}-${sem}-sem-results`);
		uploadBytes(storageRef, image).then((snapshot) => {
			console.log('uploaded succesfully');
			getDownloadURL(
				ref(storage, `results/${year}-year-${dept}-${sem}-sem-results`)
			).then(async (url) => {
				const dateObj = new Date();
				const month = dateObj.getUTCMonth() + 1; //months from 1-12
				const day = dateObj.getUTCDate();
				const years = dateObj.getUTCFullYear();
				const today = day + '/' + month + '/' + years;
				const resultsid = uuidv4();
				const data = {
					year: year,
					dept: dept,
					resultid:resultsid,
					sem: sem,
					resultimage: url,
					title: title,
					description: description,
					date: today
				};
				
				const res = await Axios.put('/student/result', data);
				const ress = await Axios.post('/student/resulthistory', data);
				console.log(res.data);
				console.log(ress.data);
				if(res.status==200){
                 setLoading(false)
				}
			});
		});
	};

	return (
		<motion.div className="resultcontainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			{loading?
				<Loader />:
		<>

           <div className="resultleft">
				<h2 style={{ color: 'rgb(7,26,46)' }}>Upload Result</h2>
				<div className="resultform">
					<div className="resulttitle">
						<p>Title</p>
						<TextField
							id="outlined-basic"
							label="Enter Name"
							variant="outlined"
							onChange={(e) => setTitle(e.target.value)}
							style={{ width: '100%' }}
						/>
					</div>

					<div className="resulttitle">
						<p>Description</p>
						<TextField
							id="outlined-basic"
							label="Enter Name"
							variant="outlined"
							onChange={(e) => setDescription(e.target.value)}
							style={{ width: '100%' }}
						/>
					</div>
					<div style={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
						<div style={{ width: '30%' }}>
							<InputLabel id="demo-simple-select-label">year</InputLabel>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								value={year}
								onChange={(e) => setYear(e.target.value)}
								style={{ width: '100%' }}
								label="select year"
							>
								<MenuItem value={1}>1st year</MenuItem>
								<MenuItem value={2}>2nd year</MenuItem>
								<MenuItem value={3}>3rd year</MenuItem>
								<MenuItem value={4}>4th year</MenuItem>
							</Select>
						</div>
						<div style={{ width: '30%' }}>
							<InputLabel id="demo-simple-select-label">Department</InputLabel>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								value={dept}
								onChange={(e) => setDept(e.target.value)}
								style={{ width: '100%' }}
								label="select department"
							>
								<MenuItem value={'cse'}>CSE</MenuItem>
								<MenuItem value={'mechanical'}>MECH</MenuItem>
								<MenuItem value={'ece'}>ECE</MenuItem>
								<MenuItem value={'eee'}>EEE</MenuItem>
								<MenuItem value={'civil'}>CIVIL</MenuItem>
							</Select>
						</div>
						<div style={{ width: '30%' }}>
							<InputLabel id="demo-simple-select-label">Semester</InputLabel>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								value={sem}
								onChange={(e) => setSem(e.target.value)}
								style={{ width: '100%' }}
								label="select department"
							>
								<MenuItem value={'1'}>1st</MenuItem>
								<MenuItem value={'2'}>2nd</MenuItem>
								<MenuItem value={'3'}>3rd</MenuItem>
								<MenuItem value={'4'}>4th</MenuItem>
								<MenuItem value={'5'}>5th</MenuItem>
								<MenuItem value={'6'}>6th</MenuItem>
								<MenuItem value={'7'}>7th</MenuItem>
								<MenuItem value={'8'}>8th</MenuItem>
							</Select>
						</div>
					</div>
					<label htmlFor="uploadfile" className="uploadcontainers">
						<CloudUploadIcon style={{ fontSize: 60 }} color="green" />
						{image.length == 0 ? (
							`Upload result`
						) : (
							<div style={{ color: 'green' }}>selected succesfully</div>
						)}
						<input
							id="uploadfile"
							type="file"
							style={{ display: 'none' }}
							onChange={(e) => setImage(e.target.files[0])}
						/>
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
				<p> Total result history : {history.length}</p>

				<div className="historycontainer">

				{history.map((e,index)=>(
                   <div className="historylist" key={e.resultid}>
				   <div>
					   <ReceiptIcon style={{ fontSize: 55, color: 'rgba(21, 122, 255)' }} />
				   </div>
				   <div className="titles">
					   <div>{`${e.year}th year-${e.dept}`}</div>
					   <div>{`${e.sem}th semester result`}</div>
				   </div>
          <div style={{display:"flex",alignItems:"flex-end",flexDirection:"column"}}>
           <div className="date">{`date:${e.date}`}</div>
          <DeleteOutlineIcon style={{fontSize:25, cursor:"pointer"  }} onClick={()=>deleteclick(e)} />

	</div>
				 
			   </div>
				))}
					
				</div>
			</div>

				</>
		}
		
			
		</motion.div>
	);
};

export default Result;
