import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const initAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initAuthentication;