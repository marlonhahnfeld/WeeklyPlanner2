// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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

const btnLogin = document.getElementById("btnLogin");

function signUpUser() {
  const inputemail = document.getElementById("inputemail").value;
  const inputpw = document.getElementById("inputpassword").value;
  const inputpw2 = document.getElementById("inputpassword2").value;

  const passwordMatch = inputpw === inputpw2;

  if (passwordMatch) {
    createUserWithEmailAndPassword(auth, inputemail, inputpw).then(
      (userCredential) => {
        const user = userCredential.user;
        InsertUserToDB(user.uid);
      }
    );
    location.assign("../html/landing-page-nach-login.html");
  }
}

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

btnregister.addEventListener("click", signUpUser);
