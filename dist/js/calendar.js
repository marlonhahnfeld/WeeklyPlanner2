const addButton = document.getElementById("Add-Appointment-Button");

function addAppointment() {
  console.log("Test");
  const title = prompt("Bitte geben Sie den Titel des Termins ein:");
  const date = prompt("Bitte geben Sie das Datum des Termins ein:");
  const priority = prompt("Bitte geben Sie die Priorität des Termins ein:");

  console.log("Titel:", title);
  console.log("Datum:", date);
  console.log("Priorität:", priority);
}
