import { auth, signOut  } from "./firebase-interface.js";

const btnProfileSignOut = document
  .getElementById("signOutProfile")
  .addEventListener("click", userSignOut);

  /**
   * ! nach signOut Seite zurück mit Pfeilbutton vom Browser bringt dich wieder zum eingeloggten Part
   * TODO back & forth Rechte anpassen wenn ausgeloggt
   */
function userSignOut() {
signOut(auth).then(() => {
    // Sign-out successful.
    location.assign("index.html");
}).catch((error) => {
    console.error(error);
});
}