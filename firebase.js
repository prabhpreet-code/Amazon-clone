import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDChTApEW1dpR02rKdgBkOdiOa9rboVzf4",
  authDomain: "clone-bae94.firebaseapp.com",
  projectId: "clone-bae94",
  storageBucket: "clone-bae94.appspot.com",
  messagingSenderId: "1061718867647",
  appId: "1:1061718867647:web:b7fa34da8bfbb2245c900a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
