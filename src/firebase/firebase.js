import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDNKf0WJ02lmcJKenMzmmnG06drGK0tzzI",
	authDomain: "joingram-app.firebaseapp.com",
	projectId: "joingram-app",
	storageBucket: "joingram-app.appspot.com",
	messagingSenderId: "1005586100099",
	appId: "1:1005586100099:web:3a0400b26e72a18778d0b6",
	measurementId: "G-2E6G7VB83F"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
