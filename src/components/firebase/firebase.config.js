const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

 /*  const firebaseConfig = {
    apiKey: "AIzaSyD_MXYUF0vdmZyvE5XZeYTNudPrdhC9ZpI",
    authDomain: "daily-yoga-a.firebaseapp.com",
    projectId: "daily-yoga-a",
    storageBucket: "daily-yoga-a.appspot.com",
    messagingSenderId: "278358772176",
    appId: "1:278358772176:web:d44dca637449b40de251d5"
  }; */

export default firebaseConfig;