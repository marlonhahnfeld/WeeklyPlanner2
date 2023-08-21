const sideBarMenu = document.getElementById("Menu-Field");
const dropdownButton = document.getElementById("Dropdown-Button");
const dropdownMenu = document.getElementById("User-Dropdown-Menu");

/**
 * * Funktion, um User-Menü anzeigen zu lassen
 * ! Besitzt eine innere Funktion, um zu schauen, wo der User gerade mit seiner Maus klickt
 * ! Falls es nicht im Bereich des User-Menüs ist, schließt sich das Fenster
 */
function showUserMenu() {
  let isHidden = dropdownMenu.classList.contains("hidden");
  // Wenn das Menü bereits sichtbar ist, verstecken
  if (!isHidden) {
    dropdownMenu.classList.add("hidden");
  }
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
}

/**
 * * Funktion, um Side-Bar-Menü einblenden zu lassen
 * ! Besitzt im CSS die genaue Animation - Arbeitet mit Transition/Transform
 */
function showSideMenu() {
  let menuField = document.getElementById("Menu-Field");
  let isHidden = menuField.classList.contains("-translate-x-full");
  if (!isHidden) {
    menuField.classList.add("-translate-x-full");
  } else {
    menuField.classList.remove("-translate-x-full");
  }
}
