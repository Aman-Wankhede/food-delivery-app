import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBs6yRInRg0TQ-PzXYhB7Ovq4HNH1bJsT8",
    authDomain: "food-delivery-app-a7c85.firebaseapp.com",
    databaseURL: "https://food-delivery-app-a7c85-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-a7c85",
    storageBucket: "food-delivery-app-a7c85.appspot.com",
    messagingSenderId: "582396803022",
    appId: "1:582396803022:web:527730ed8030492bcbdd9f",
    measurementId: "G-C56TJJMKXN"
  };
  const app= getApps.Length > 0 ? getApp():initializeApp(firebaseConfig);
  const firestore =getFirestore(app)
  const storage =getStorage(app)
    export {app,firestore,storage};