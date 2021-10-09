import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseInitize = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInitize;