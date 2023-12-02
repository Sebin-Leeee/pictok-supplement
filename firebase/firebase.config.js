import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqeKXza5xavZ6t15rBDuVjqRmAY0e8gbg",
  authDomain: "pictok-b4806.firebaseapp.com",
  projectId: "pictok-b4806",
  storageBucket: "pictok-b4806.appspot.com",
  messagingSenderId: "206565969021",
  appId: "1:206565969021:web:9bd202c0927462cd11b514"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);