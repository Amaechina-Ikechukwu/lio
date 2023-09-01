// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIJzehZ9eXSxaD3HsdhenMlQwSMhe8mkg",
  authDomain: "lio-6af30.firebaseapp.com",
  projectId: "lio-6af30",
  storageBucket: "lio-6af30.appspot.com",
  messagingSenderId: "72975761200",
  appId: "1:72975761200:web:087f4acd25adce76dad2f5"
};

// Initialize Firebase
 const firebase = initializeApp(firebaseConfig);
 const auth = getAuth(firebase)
 const db = getFirestore(firebase)
 export { auth,db};