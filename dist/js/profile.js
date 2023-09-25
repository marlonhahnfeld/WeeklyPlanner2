import { auth, signOut  } from "./firebase-interface.js";

const btnProfileSignOut = document
  .getElementById("signOutProfile")
  .addEventListener("click", userSignOut);

function userSignOut() {
signOut(auth).then(() => {
    // Sign-out successful.
    location.assign("index.html");
}).catch((error) => {
    console.error(error);
});
}