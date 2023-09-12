/**
 * Terminklasse
 * @param: titel, datum, ort, berschreibung, prioritaet
 */
class Termin {
  constructor(titel, datum, ort, beschreibung, prioritaet) {
    this.titel = titel;
    this.datum = datum;
    this.ort = ort;
    this.beschreibung = beschreibung;
    this.prioritaet = prioritaet;
  }
}

// Dummy database to store Termin objects
const terminDatabase = [];

/**
 * * Speichert erstellten userTermin anhand userInput in die Datenbank
 *   TODO Datenbank noch Liste statt richtige Datenbank
 *   Arbeitet mit Terminklasse
 */
function saveTermin() {
  const titel = document.getElementById("titelInput").value;
  const datum = document.getElementById("datumInput").value;
  const ort = document.getElementById("ortInput").value;
  const beschreibung = document.getElementById("beschreibungInput").value;
  const prioritaet = document.getElementById("prioritaetInput").value;

  // Create a new instance of the Termin class
  const termin = new Termin(titel, datum, ort, beschreibung, prioritaet);

  // Add the termin object to the database
  terminDatabase.push(termin);

  // Display the saved Termin
  const savedTerminElement = document.getElementById("savedTermin");
  savedTerminElement.innerHTML = `<strong>Saved Termin:</strong><br>
        Titel: ${termin.titel}<br>
        Datum: ${termin.datum}<br>
        Ort: ${termin.ort}<br>
        Beschreibung: ${termin.beschreibung}<br>
        Priorität: ${termin.prioritaet}`;

  // Clear input fields after saving
  document.getElementById("titelInput").value = "";
  document.getElementById("datumInput").value = "";
  document.getElementById("ortInput").value = "";
  document.getElementById("beschreibungInput").value = "";
  document.getElementById("prioritaetInput").value = "";
}
/**
 * * Holt alle Termine von Datenbank und packt sie stellt sie in HTML dar
 *   TODO Datenbank noch Liste statt richtige Datenbank
 *   Iteration über Liste, löscht alles und alles wieder neu rein
 */
function displayAllTerminObjects() {
  const terminBox = document.getElementById("terminBox");
  const terminList = document.getElementById("terminList");

  // Clear previous content
  terminList.innerHTML = "";

  // Loop through the terminDatabase and display each Termin object
  for (const termin of terminDatabase) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Titel:</strong> ${termin.titel}<br>
            <strong>Datum:</strong> ${termin.datum}<br>
            <strong>Ort:</strong> ${termin.ort}<br>
            <strong>Beschreibung:</strong> ${termin.beschreibung}<br>
            <strong>Priorität:</strong> ${termin.prioritaet}<br><br>`;
    terminList.appendChild(listItem);
  }

  // Display the Termin box
  terminBox.classList.remove("hidden");
}
