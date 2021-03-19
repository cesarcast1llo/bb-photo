import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBRS-ab6VXQoXAJ-GwRlezT8D4by13vmCE',
  authDomain: 'bb2021-b47fe.firebaseapp.com',
  projectId: 'bb2021-b47fe',
  storageBucket: 'bb2021-b47fe.appspot.com',
  messagingSenderId: '354271684651',
  appId: '1:354271684651:web:bf94318151f9a53df7e26e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
