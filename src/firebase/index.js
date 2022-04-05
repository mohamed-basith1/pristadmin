import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
	apiKey: 'AIzaSyBCR-nO6nAQ_AqZwVAR08xzbRYpYwr1GMA',
	authDomain: 'trackbus-cdda1.firebaseapp.com',
	projectId: 'trackbus-cdda1',
	storageBucket: 'trackbus-cdda1.appspot.com',
	messagingSenderId: '834151043738',
	appId: '1:834151043738:web:ab401e14b1be448cd60523'
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
