// Import the functions you need from the SDKs you need

import {
  auth,
  db,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
} from "./firebase-interface.js";

const register1 = document.getElementById("register1");
const register2 = document.getElementById("register2");
const btn2register2 = document.getElementById("btn2register2");
const btnback = document.getElementById("btnback");

btnregister.addEventListener("click", signUpUser);

btnback.addEventListener("click", goToRegisterPage2);

btn2register2.addEventListener("click", goBackToRegisterPage1);

function goToRegisterPage2() {
  register1.classList.toggle("hidden");
  register2.classList.toggle("hidden");
  btnback.classList.toggle("hidden");
}

function goBackToRegisterPage1() {
  register1.classList.toggle("hidden");
  register2.classList.toggle("hidden");
  btnback.classList.toggle("hidden");
}

function signUpUser() {
  const inputemail = document.getElementById("inputemail").value;
  const inputpw = document.getElementById("inputpassword").value;
  const inputpw2 = document.getElementById("inputpassword2").value;

  const passwordMatch = inputpw === inputpw2;

  if (passwordMatch) {
    createUserWithEmailAndPassword(auth, inputemail, inputpw).then(
      async (userCredential) => {
        const user = userCredential.user;
        await InsertUserToDB(user.uid);
        location.assign("../html/landing-page-nach-login.html");
      }
    );
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
