const notePopUp = document.getElementById("Note-PopUp-Container");

/**
 * * Funktion, um das PopUp anzeigen zu lassen
 * TODO: Wenn PopUp geöffnet wird, dann soll Hintergrund etwas bluren
 */
function showPopUp() {
  notePopUp.classList.remove("hidden");
}

/**
 * * Funktion, um das PopUp schließen zu lassen
 * TODO: Hover Effect - Rot Ton heller machen
 */
function closePopUp() {
  let isHidden = notePopUp.classList.contains("hidden");
  if (!isHidden) {
    notePopUp.classList.add("hidden");
  }
}

/**
 * * Funktion, um eine Notiz zu erstellen
 * ! Import Use lässt andere Methoden nicht mehr funktionieren
 */
function createNote() {
  let title = document.getElementById("Input-Title").value;
  let desc = document.getElementById("Input-Desc").value;
  console.log(title + "\n" + desc);
}
