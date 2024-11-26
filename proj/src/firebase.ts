// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClugJE2CQMhpn3mD2H_wfwn3nsVL-u5Xk",
  authDomain: "roteiro-31497.firebaseapp.com",
  projectId: "roteiro-31497",
  storageBucket: "roteiro-31497.firebasestorage.app",
  messagingSenderId: "772704763322",
  appId: "1:772704763322:web:34e4db9140ec17c8e87183",
  measurementId: "G-H2Y30B00SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
export default firebaseConfig