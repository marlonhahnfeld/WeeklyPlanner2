import {
  auth,
  getDoc,
  doc,
  db,
  collection,
  getDocs,
} from "./firebase-interface.js";

const user = await auth.currentUser;
const btnLoad = document.getElementById("btnLoad");
const btnSave = document.getElementById("btnSave");
const inputVorname = document.getElementById("inputSettingsVorname");

btnLoad.addEventListener("click", getData);
//  document.addEventListener("DOMContentLoaded", testGetDb);

async function getData() {
  const docRefUid = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRefUid);
  if (docSnap.exists()) {
    // Warten, bis der Benutzer aus der Datenbank gezogen wurde
    const vorname = await docSnap.data().vorname;

    // Setzen des Werts des Eingabefelds
    inputVorname.value = vorname;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function getTermine() {
  // Query a reference to a subcollection
  const querySnapshot = await getDocs(
    collection(db, "users", auth.currentUser.uid, "Termine")
  );
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    console.log(doc.data().appointmentTitle);
  });
}

//Definieren Sie eine Funktion, um den Vornamen des Benutzers abzurufen
async function getVorname() {
  // Erstellen Sie einen Verweis auf das Dokument des Benutzers
  const docRefVorname = doc(db, "users", user.uid);

  // Holen Sie das Dokument des Benutzers ab
  const docSnap = await getDoc(docRefVorname);

  // Holen Sie den Vornamen des Benutzers aus dem Dokument
  return docSnap.data().vorname;
}
