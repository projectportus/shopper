import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
 
const firebaseConfig = {
  apiKey: "AIzaSyAEj8suo4O0k5Hy-wXJ24XVvZrYdMAJUFY",
  authDomain: "e-commerce-fc73e.firebaseapp.com",
  projectId: "e-commerce-fc73e",
  storageBucket: "e-commerce-fc73e.firebasestorage.app",
  messagingSenderId: "860193958663",
  appId: "1:860193958663:web:f41fa6de6956f0dcb773a2",
  measurementId: "G-FYPXM08H3D"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};