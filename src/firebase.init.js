// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByj2a7p7Cg6yHHPkmtK_GblUQOcuLcGXo",
  authDomain: "independent-service-prov-2bcc4.firebaseapp.com",
  projectId: "independent-service-prov-2bcc4",
  storageBucket: "independent-service-prov-2bcc4.appspot.com",
  messagingSenderId: "20233372704",
  appId: "1:20233372704:web:624572e2f6a7fc9828e845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;