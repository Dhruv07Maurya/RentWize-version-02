import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZOULhGz7oflcOB0VGtPwXXTUX7lA_-Xs",
  authDomain: "myfirstapp-85460.firebaseapp.com",
  projectId: "myfirstapp-85460",
  storageBucket: "myfirstapp-85460.appspot.com",
  messagingSenderId: "1089786094248",
  appId: "1:1089786094248:web:301d298617bb897b12989d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
export { fireDb, auth };
