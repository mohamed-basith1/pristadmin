import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './circular.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '../../components/button';
import { motion } from 'framer-motion';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { storage } from '../../firebase';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ref, uploadBytes, getDownloadURL,deleteObject } from 'firebase/storage';
import Axios from '../../api';
import Loader from '../../components/loader';
import { v4 as uuidv4 } from 'uuid';
const Result = () => {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ image, setImage ] = useState('');
	const [ loading, setLoading ] = useState(false);
	const [ history, setHistory ] = useState([]);

	useEffect(
		() => {
			getcircularhistory();
		},
		[ loading ]
	);

	const getcircularhistory = async () => {
		const res = await Axios.get('/student/circularhistory');
		console.log(res.data);
		setHistory(res.data);
	};
	const formsubmit = async () => {
		if (!title.length == 0 && !description.length == 0) {
			if (!image == ' ') {
				imageclicked();
				setTitle('');
				setDescription('');
				setImage('');
				setLoading(true);
			}
		}
	};
	const deleteclick = async (e) => {
		
		setLoading(true)
console.log(e)

const res = await Axios.put('/student/deletecircular',e)
console.log("delete resond",res.data)




// // Create a reference to the file to delete
const desertRef = ref(storage, `circular/${e.title}--${e.description}--date:${e.date}`);

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
	};
	const imageclicked = async () => {
		console.log(image);
		const dateObj = new Date();
		const month = dateObj.getUTCMonth() + 1; //months from 1-12
		const day = dateObj.getUTCDate();
		const years = dateObj.getUTCFullYear();
		const today = day + '/' + month + '/' + years;
		const storageRef = await ref(storage, `circular/${title}--${description}--date:${today}`);
		uploadBytes(storageRef, image).then((snapshot) => {
			console.log('uploaded succesfully');
			getDownloadURL(
				ref(storage, `circular/${title}--${description}--date:${today}`)
			).then(async (url) => {
				const cirularssid = uuidv4();
				const data = {
					circularid: cirularssid,
					circularimage: url,
					title: title,
					description: description,
					date: today
				};

				const res = await Axios.put('/student/circularhistory', data);
				console.log(res.data)

				const ress = await Axios.post('/student/addtocircularlist', data);
				console.log(res.data);
				console.log(ress.data);
				if (res.status == 200) {
					setLoading(false)
				}
			});
		});
	};
//testing
	return (
		<motion.div
			className="resultcontainer"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1.5 }}
			exit={{ opacity: 0 }}
		>
				{loading?
				<Loader />:
		<>

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
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className="resulttitle">
						<p>Description</p>
						<TextField
							id="outlined-basic"
							label="Enter Name"
							variant="outlined"
							style={{ width: '100%' }}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<label htmlFor="uploadfile" className="uploadcontainer">
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
				<p> Total circular history</p>

				<div className="historycontainer">
					{history.map((e, index) => (
						<div className="historylist" key={e.circularid}>
							<div>
								<ReceiptIcon style={{ fontSize: 55, color: 'rgba(21, 122, 255)' }} />
							</div>
							<div className="titles">
								<div>{e.title}</div>
								<div>{e.description}</div>
							</div>
							<div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
								<div className="date">{`date:${e.date}`}</div>
								<DeleteOutlineIcon
									style={{ fontSize: 25, cursor: 'pointer' }}
									onClick={() => deleteclick(e)}
								/>
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
