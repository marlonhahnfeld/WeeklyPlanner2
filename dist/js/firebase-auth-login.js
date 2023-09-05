// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGVWD9oopCpJxcurKz2R55FHwzNWuh9Cg",
  authDomain: "weeklyplanner2-63de7.firebaseapp.com",
  projectId: "weeklyplanner2-63de7",
  storageBucket: "weeklyplanner2-63de7.appspot.com",
  messagingSenderId: "742332640642",
  appId: "1:742332640642:web:c387955abebf8de1d2f39b",
  measurementId: "G-2RRFC79C48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function InsertUserToDB(uid) {
  const firstName = document.getElementById("inputFirstName").value;
  const secondName = document.getElementById("inputSecondName").value;
  const dateOfBirth = document.getElementById("inputBirthday").value;

  await setDoc(doc(db, "users", uid), {
    vorname: firstName,
    nachname: secondName,
    geburtstag: dateOfBirth,
    uid: uid,
  });
}

function signInUser() {
  const emailValue = document.getElementById("inputLoginEmail").value;
  const passwordValue = document.getElementById("inputLoginPW").value;

  signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // Ersetzen der aktuellen URL durch "/neue-seite.html"
      location.assign("landing-page-nach-login.html");
      console.log("LOGIN SUCCESSFUL");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Passwort stimmt nicht überein.");
      setTimeout(() => {
        location.reload(true);
      });
    });
}

btnLogin.addEventListener("click", signInUser);
