import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
require("dotenv").config();

var firebaseConfig = {
  apiKey: `"${process.env.FIREBASE_API_KEY}"`,
  authDomain: "jen-c-de3ed.firebaseapp.com",
  databaseURL: "https://jen-c-de3ed.firebaseio.com",
  projectId: "jen-c-de3ed",
  storageBucket: "jen-c-de3ed.appspot.com",
  messagingSenderId: "240149636099",
  appId: "1:240149636099:web:e1e066617111bc339e9a36",
  measurementId: "G-3XE2FBS23H",
};

firebase.initializeApp(firebaseConfig);
firebase.auth();

export default firebase;
