import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyASpGPW134duvW3-0evtLwLMsR3_xset0c",
  authDomain: "mymoney-6dc95.firebaseapp.com",
  projectId: "mymoney-6dc95",
  storageBucket: "mymoney-6dc95.appspot.com",
  messagingSenderId: "1075612148744",
  appId: "1:1075612148744:web:aa16c425c61463f13a9dbd"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }