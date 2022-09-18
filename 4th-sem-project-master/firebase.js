const firebase = require('firebase/app');

const firebaseConfig = {
    apiKey: "AIzaSyAx6JvGJrSsMoDGaUX1uZoAuAxnF-Q2SCw",
    authDomain: "edura-hub.firebaseapp.com",
    projectId: "edura-hub",
    storageBucket: "edura-hub.appspot.com",
    messagingSenderId: "509549370534",
    appId: "1:509549370534:web:8844fdfc17a4c6ebfb6867",
    measurementId: "G-3HJ1YPHBZK"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const db = firebase.default.firestore();
  const auth = firebase.default.auth();

  db.collection('class12').get().then(snapShot=>{
      const data = snapShot.docs.map(doc=>doc.data());
      console.log(data);
  })

  