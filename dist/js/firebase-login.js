import { auth, signInWithEmailAndPassword } from "./firebase-interface.js";

btnLogin.addEventListener("click", signInUser);

function signInUser() {
  const emailValue = document.getElementById("inputLoginEmail").value;
  const passwordValue = document.getElementById("inputLoginPW").value;

  signInWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      // Ersetzen der aktuellen URL durch "/neue-seite.html"
      location.assign("landing-page-nach-login.html");

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
