import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-EqlDa5KbQE2RZJIQ7mSapNb2HylJbQs",
  authDomain: "react-slack-clone-18f3a.firebaseapp.com",
  databaseURL: "https://react-slack-clone-18f3a.firebaseio.com",
  projectId: "react-slack-clone-18f3a",
  storageBucket: "react-slack-clone-18f3a.appspot.com",
  messagingSenderId: "840688392461",
  appId: "1:840688392461:web:46d5ff6d17483074"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
