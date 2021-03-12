import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyAj-ySRqHf3Nyzs7LzrUyqOIdYjzsrLSTQ',
	authDomain: 'e-commerce-react-d777d.firebaseapp.com',
	projectId: 'e-commerce-react-d777d',
	storageBucket: 'e-commerce-react-d777d.appspot.com',
	messagingSenderId: '570749925271',
	appId: '1:570749925271:web:961542f30565f0d80636d2',
	measurementId: 'G-0W8EMN2G5D',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (err) {
			console.log('Error creating user', err.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
