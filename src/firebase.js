// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//^ Note, firebase API key is OK to share, its used only to recognize your app
const firebaseConfig = {
  apiKey: " AIzaSyDAgQCRp8oWxP0EL9dwUeHVhqtPY1LYL9s",
  authDomain: "fir-login-test-aabe2.firebaseapp.com",
  projectId: "fir-login-test-aabe2",
  storageBucket: "fir-login-test-aabe2.appspot.com",
  messagingSenderId: "62869379875",
  appId: "1:62869379875:web:b72e001bc4334d8eb58a96",
  measurementId: "G-7671NWF102",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
