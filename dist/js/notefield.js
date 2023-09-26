const upperBodyContainer = document.getElementById("Upper-Body");
const mainContentContainer = document.getElementById("Main-Content-Container");
const greetingContainer = document.getElementById("Greeting-Container");
const notePopUp = document.getElementById("Note-PopUp-Container");
const addNoteButton = document.getElementById("Add-Note-Button");
const dividerForBackground = document.getElementById("Divider-Background");
const inputNoteTitle = document.getElementById("Input-Title");
const inputNoteDesc = document.getElementById("Note-Desc");

/**
 * * Funktion, um Note-PopUp anzeigen zu lassen
 */
function showPopUp() {
  notePopUp.classList.remove("hidden");
  dividerForBackground.classList.remove("hidden");
  upperBodyContainer.classList.add("opacity-25");
  mainContentContainer.classList.add("opacity-25");
  greetingContainer.classList.add("opacity-25");
}

/**
 * * Funktion, um das PopUp schließen zu lassen
 */
function closePopUp() {
  let isHidden = notePopUp.classList.contains("hidden");
  if (!isHidden) {
    inputNoteTitle.value = "";
    inputNoteDesc.value = "";
    notePopUp.classList.add("hidden");
    dividerForBackground.classList.add("hidden");
    upperBodyContainer.classList.remove("opacity-25");
    mainContentContainer.classList.remove("opacity-25");
    greetingContainer.classList.remove("opacity-25");
  }
}

/**
 * * Funktion, um eine Notiz zu erstellen
 * ! Import Use lässt andere Methoden nicht mehr funktionieren
 */
function createNote() {
  let title = inputNoteTitle.value;
  let desc = inputNoteDesc.value;
  console.log(title + "\n" + desc);

  inputNoteTitle.value = "";
  inputNoteDesc.value = "";
  closePopUp();
}
