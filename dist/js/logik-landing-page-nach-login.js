import { db, doc, setDoc, auth } from "./firebase-interface.js";

const dropdownButton = document.getElementById("User-Dropdown-Button");
const dropdownMenu = document.getElementById("User-Dropdown-Menu");
const sideMenuButton = document.getElementById("Menu-Button");
const sideMenuContainer = document.getElementById("Menu-Container");
const btnAdd = document.getElementById("btnAdd");
const closeAdd = document.getElementById("closeAdd");

const btnProfile = document
  .getElementById("User-Dropdown-Button")
  .addEventListener("click", showUserMenu);
btnAdd.addEventListener("click", openAppointmentPopUp);

const btnSideBar = document
  .getElementById("Menu-Button")
  .addEventListener("click", showSideMenu);
btnAdd.addEventListener("click", openAppointmentPopUp);

closeAdd.addEventListener("click", closeAddAppointment);

document.addEventListener("DOMContentLoaded", () => {
  const btnAppointmentAdd = document.getElementById("btnAppointmentAdd");
  btnAppointmentAdd.addEventListener("click", createAppointment);
});

/**
 * * Funktion, um User-Menü anzeigen zu lassen
 * ! Besitzt eine innere Funktion, um zu schauen, wo der User gerade mit seiner Maus klickt
 * ! Falls es nicht im Bereich des User-Menüs ist, schließt sich das Fenster
 */
function showUserMenu() {
  let isHidden = dropdownMenu.classList.contains("hidden");
  // Wenn das Menü versteckt ist, anzeigen und den Event Listener hinzufügen
  dropdownMenu.classList.remove("hidden");
  // Event Listener für Klicks auf das Dokument, um das Menü zu schließen
  const closeUserMenu = function (event) {
    const targetElement = event.target;
    // Prüfen, ob das geklickte Element nicht innerhalb des Menüs oder des Dropdown-Buttons liegt
    if (
      !dropdownMenu.contains(targetElement) &&
      !dropdownButton.contains(targetElement)
    ) {
      // Menü schließen
      dropdownMenu.classList.add("hidden");
      // Event Listener entfernen, nachdem das Menü geschlossen wurde
      document.removeEventListener("click", closeUserMenu);
    }
  };
  document.addEventListener("click", closeUserMenu);
  // Wenn das Menü bereits sichtbar ist, verstecken
  if (!isHidden) {
    dropdownMenu.classList.add("hidden");
  }
}

/**
 * * Funktion, um Side-Bar-Menü einblenden zu lassen
 * ! Besitzt im CSS die genaue Animation - Arbeitet mit Transition/Transform
 * Ergänzung, dass wenn außerhalb geklickt wird, dass sich Menü schließt
 */
function showSideMenu() {
  let isHidden = sideMenuContainer.classList.contains("-translate-x-full");
  sideMenuContainer.classList.remove("-translate-x-full");
  const closeSideMenu = function (event) {
    const targetElement = event.target;
    if (
      !sideMenuContainer.contains(targetElement) &&
      !sideMenuButton.contains(targetElement)
    ) {
      sideMenuContainer.classList.add("-translate-x-full");
      document.removeEventListener("click", closeSideMenu);
    }
  };
  document.addEventListener("click", closeSideMenu);
  if (!isHidden) {
    sideMenuContainer.classList.add("-translate-x-full");
  }
}

/**
 * * opens the appointment add popup
 */
function openAppointmentPopUp() {
  const maincontent = document.getElementById("Main-Content-Container");
  const popup = document.getElementById("popup");
  popup.classList.toggle("hidden");
  maincontent.classList.toggle("blur");

  // Animate the popup
  popup.classList.add("fadeIn");
  popup.classList.add("scaleIn");
}

/**
 * * Schließt das Termin hinzufügen popup
 *
 */
function closeAddAppointment() {
  const popup = document.getElementById("popup");
  const maincontent = document.getElementById("Main-Content-Container");
  popup.classList.toggle("hidden");
  maincontent.classList.toggle("blur");
}

/**
 * Class representing an appointment.
 *
 * * @class Appointment
 * * @property {string} title - The title of the appointment.
 * * @property {string} date - The date of the appointment.
 * * @property {string} place - The place of the appointment.
 * * @property {string} description - The description of the appointment.
 * * @property {string} priority - The priority of the appointment.
 * TODO getter und setter adden
 */
class Appointment {
  constructor(title, date, place, description, priority) {
    this.title = title;
    this.date = date;
    this.place = place;
    this.description = description;
    this.priority = priority;
  }
}

/**
 * * Erstellt einen Termin mit Eigenschaften aus den Inputs und schließt das Popup danach
 * ! Nur Title und Date+Time werden benötigt, alles weitere ist optional
 *
 */
function createAppointment() {
  const appointmentTitle = document.getElementById("inputTitle").value;
  const appointmentDate = document.getElementById("inputDate").value;
  const appointmentPlace = document.getElementById("inputPlace").value;
  const appointmentDescription =
    document.getElementById("inputDescription").value;
  const appointmentPriority = document.getElementById("inputPriorities").value;

  if ((appointmentTitle && appointmentDate) !== "") {
    const appointment = new Appointment(
      appointmentTitle,
      appointmentDate,
      appointmentPlace,
      appointmentDescription,
      appointmentPriority
    );
    saveAppointmentToDb(appointment);
    closeAddAppointment();
  } else {
    // TODO irgendwie benachrichtigen, dass eingaben benötigt werden
  }
}

/**
 * * speichert einen termin in der db für user
 * @param {*} appointment
 */
async function saveAppointmentToDb(appointment) {
  const user = auth.currentUser;
  await setDoc(doc(db, "users/" + user.uid, "Termine", appointment.title), {
    appointmentTitle: appointment.title,
    appointmentDate: appointment.date,
    appointmentPlace: appointment.place,
    appointmentDescription: appointment.description,
    appointmentPriority: appointment.priority,
  });
}
