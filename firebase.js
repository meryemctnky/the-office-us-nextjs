import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: 'the-office-acc23.firebaseapp.com',
  databaseURL: process.env.BASE_URL,
  projectId: 'the-office-acc23',
  storageBucket: 'the-office-acc23.appspot.com',
  messagingSenderId: '161435059182',
  appId: '1:161435059182:web:a1705caf0e66442dc684ff',
  measurementId: 'G-SDBMBS7LQS',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
