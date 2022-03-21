import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDUd-UHRkijDzJXrQZgSwjs6boYswBI-qU",
    authDomain: "clone-480c7.firebaseapp.com",
    projectId: "clone-480c7",
    storageBucket: "clone-480c7.appspot.com",
    messagingSenderId: "828657896048",
    appId: "1:828657896048:web:aebddc7dd7ed8d7a6782b5"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore();
 const auth=firebase.auth();

 export {db,auth}