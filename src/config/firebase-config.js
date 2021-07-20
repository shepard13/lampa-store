import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyB68nC-yM0TLnSbgyL8ts_2db92AZBty8Q',
  authDomain: 're-store-a8e5f.firebaseapp.com',
  databaseURL:
    'https://re-store-a8e5f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 're-store-a8e5f',
  storageBucket: 're-store-a8e5f.appspot.com',
  messagingSenderId: '207403324655',
  appId: '1:207403324655:web:e58c0088aa906cfa1ff71a',
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
