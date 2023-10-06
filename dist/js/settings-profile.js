import { auth, getDoc, doc, db } from "./firebase-interface.js";

const user = await auth.currentUser;
const btnSave = document.getElementById("btnSave");
const inputVorname = document.getElementById("inputSettingsVorname");

btnSave.addEventListener("click", testGetDb);
//  document.addEventListener("DOMContentLoaded", testGetDb);

async function testGetDb() {
  const docRefVorname = doc(db, "users", auth.currentUser.uid);
  const docSnap = await getDoc(docRefVorname);
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

//Definieren Sie eine Funktion, um den Vornamen des Benutzers abzurufen
async function getVorname() {
  // Erstellen Sie einen Verweis auf das Dokument des Benutzers
  const docRefVorname = doc(db, "users", user.uid);

  // Holen Sie das Dokument des Benutzers ab
  const docSnap = await getDoc(docRefVorname);

  // Holen Sie den Vornamen des Benutzers aus dem Dokument
  return docSnap.data().vorname;
}
