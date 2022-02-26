// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAdcCjDIS51D-iKBcniwN06icbIe4KMMzk",
  authDomain: "crowdymobileweb.firebaseapp.com",
  projectId: "crowdymobileweb",
  storageBucket: "crowdymobileweb.appspot.com",
  messagingSenderId: "779956686304",
  appId: "1:779956686304:web:f3ce2de8265a2d2fcd6f85",
  measurementId: "G-WM9ZPZ5Z57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
