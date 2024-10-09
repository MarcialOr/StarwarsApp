import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDwcTucG_hHVhyEt33rijqFjR8lEq8G6I4",
  authDomain: "starwars-154f6.firebaseapp.com",
  projectId: "starwars-154f6",
  storageBucket: "starwars-154f6.appspot.com",
  messagingSenderId: "389843835703",
  appId: "1:389843835703:web:08cb3c3ca35b8de37f58b2",
  measurementId: "G-YQTCESRGBR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
