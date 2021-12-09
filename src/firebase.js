// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3BTjVWDIQcaltYW_lyji9MZXhOCPUDIo",
  authDomain: "social-media-8be9c.firebaseapp.com",
  projectId: "social-media-8be9c",
  storageBucket: "social-media-8be9c.appspot.com",
  messagingSenderId: "616268555865",
  appId: "1:616268555865:web:beaa0c444167615b88b348",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
