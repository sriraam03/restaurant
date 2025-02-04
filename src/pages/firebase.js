import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDCrWA_HPgSZLQnGoqGwtOixuVoAwSnRHE",
  authDomain: "restaurantfood-704c6.firebaseapp.com",
  projectId: "restaurantfood-704c6",
  storageBucket: "restaurantfood-704c6.firebasestorage.app",
  messagingSenderId: "428794531165",
  appId: "1:428794531165:web:9f6d381edc147e1d762cb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db=getFirestore(app)
export default app