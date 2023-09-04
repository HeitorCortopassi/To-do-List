import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC-mvpWA-cG2EvLltGzeLa1GhUamlhCNtE",
    authDomain: "todolist-f7265.firebaseapp.com",
    projectId: "todolist-f7265",
    storageBucket: "todolist-f7265.appspot.com",
    messagingSenderId: "1081214527304",
    appId: "1:1081214527304:web:4ec27e2010bccba8e6357d",
    measurementId: "G-NRE192NXCF"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };