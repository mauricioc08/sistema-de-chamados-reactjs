import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4YF9HgjNzV35vYJPDc0Mh5tg-cmV24lc",
  authDomain: "tickets-29ede.firebaseapp.com",
  projectId: "tickets-29ede",
  storageBucket: "tickets-29ede.appspot.com",
  messagingSenderId: "569637215397",
  appId: "1:569637215397:web:fe2009ac9c080c2c44014c",
  measurementId: "G-W6TM33LTZM",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
