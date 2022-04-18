// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS1e4_mp1tJ5oKYXceJ-yy0RLaGlh1RSI",
  authDomain: "independent-service-prov-55a77.firebaseapp.com",
  projectId: "independent-service-prov-55a77",
  storageBucket: "independent-service-prov-55a77.appspot.com",
  messagingSenderId: "577972933309",
  appId: "1:577972933309:web:4a8c43a8715ccefacf9dd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;