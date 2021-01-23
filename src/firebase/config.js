import { firebase } from '@firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBnU7_s6iIzVq3X1zD6yArPLFB5Vf0p-YA',
  // TODO hide with .env File
  authDomain: 'bb-photo.firebaseapp.com',
  projectId: 'bb-photo',
  storageBucket: 'bb-photo.appspot.com',
  messagingSenderId: '745724473332',
  appId: '1:745724473332:web:a5004b681faf7ee13353a1',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
