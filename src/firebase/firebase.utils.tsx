// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// import 'firebase/compat/storage';
// import 'firebase/compat/firestore';
import 'firebase/firestore';
import 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoguHUCryLGUMcctkgrn_w648_ENIHGrY",
  authDomain: "fb-clone-785e2.firebaseapp.com",
  projectId: "fb-clone-785e2",
  storageBucket: "fb-clone-785e2.appspot.com",
  messagingSenderId: "1025073509118",
  appId: "1:1025073509118:web:51cc5a9a44e25345c72baf"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

// export default firebase;