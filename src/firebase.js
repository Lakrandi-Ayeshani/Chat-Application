import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXfXL2h3BYFHRwkvh1aVfZVMcJ0OLO2po",
  authDomain: "chat-a23f7.firebaseapp.com",
  projectId: "chat-a23f7",
  storageBucket: "chat-a23f7.appspot.com",
  messagingSenderId: "921830505326",
  appId: "1:921830505326:web:fd93bfc0bb9577c6315f7f",
  measurementId: "G-X1X4RVNRTG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()