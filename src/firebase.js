// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, doc, getDocs, collection } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDDC-bUo4pY3CeySTDrc0kRBNgs8YQqABE',
	authDomain: 'test-table-project-43c50.firebaseapp.com',
	projectId: 'test-table-project-43c50',
	storageBucket: 'test-table-project-43c50.appspot.com',
	messagingSenderId: '589762139957',
	appId: '1:589762139957:web:0b37adbae967eaf3855e7c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore()

export { db, doc, getDocs, collection }

export default app
