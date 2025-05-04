import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZXE4wSlJrtOGQsWVsZhjH0IhzgTrDzvU",
  authDomain: "userroles-608e5.firebaseapp.com",
  projectId: "userroles-608e5",
  storageBucket: "userroles-608e5.appspot.com",
  messagingSenderId: "113944193775",
  appId: "1:113944193775:android:ce65c48a726a500712891a",
  databaseURL: "https://userroles-608e5-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);