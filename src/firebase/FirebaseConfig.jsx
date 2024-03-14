// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABzx70jdfhABpVJY1HIoIpRO3sMafiGKQ",
  authDomain: "myecom-91710.firebaseapp.com",
  projectId: "myecom-91710",
  storageBucket: "myecom-91710.appspot.com",
  messagingSenderId: "193973418979",
  appId: "1:193973418979:web:039138559dce227ee27ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }