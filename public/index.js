import { firebase } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app-compat.js';
// import { firestore } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore-compat.js';

const firebase = initializeApp({
    apiKey: "AIzaSyAIrKeHpTwUQLLJipXFnwyI0q7gXYtnZgc",
    authDomain: "g-house-bf144.firebaseapp.com",
    databaseURL: "https://g-house-bf144.firebaseio.com",
    projectId: "g-house-bf144",
    storageBucket: "g-house-bf144.appspot.com",
    messagingSenderId: "467660754087",
    appId: "1:467660754087:web:dcd9d6326a6b3bb1fddf82"
});

const db = getFirestore(firebaseApp);