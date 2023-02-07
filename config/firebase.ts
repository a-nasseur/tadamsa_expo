// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8G3o7J05OdAR6CLxsjpq_7Rbr1fYoPak',
  authDomain: "tadamsaexpo-55daf.firebaseapp.com",
  projectId: "tadamsaexpo-55daf",
  storageBucket: "tadamsaexpo-55daf.appspot.com",
  messagingSenderId: "42237015030",
  appId: "1:42237015030:web:de51ca3e14107f800acdd7",
  measurementId: "G-1RB861KJ1W"
};


// Initialize Firebase
// export const app = getApps().length ? initializeApp(firebaseConfig) : getApp();
// export const auth = getAuth(app);
// export const store = getFirestore(app);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db }