import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_2PX0OUNmz9SxoexFt7k2UtOgkO0ftO0",
  authDomain: "mypage-28e9e.firebaseapp.com",
  databaseURL: "https://mypage-28e9e.firebaseio.com",
  projectId: "mypage-28e9e",
  storageBucket: "mypage-28e9e.appspot.com",
  messagingSenderId: "92521123872",
  appId: "1:92521123872:web:7efa674e54c0bb6a"
};

export default
  !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig).firestore() :
    firebase.app().firestore();