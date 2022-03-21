import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMSch5-8c65tqOR4uG_4ARan7xQsJDb64",
  authDomain: "notional-data-253816.firebaseapp.com",
  projectId: "notional-data-253816",
  storageBucket: "notional-data-253816.appspot.com",
  messagingSenderId: "1057094302079",
  appId: "1:1057094302079:web:7d251026a17da44c41824a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
