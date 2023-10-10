import {
  auth,
  getDoc,
  doc,
  db,
  collection,
  getDocs,
} from "./firebase-interface.js";

const user = await auth.currentUser;
const mainContent = document.getElementById("mainContent");
const btnLoad = document.getElementById("btnLoad");

btnLoad.addEventListener("click", getTermine);

async function getTermine() {
  // Create a list element to store the appointments
  const list = document.createElement("ul");
  //list.style.paddingLeft = "25px";
  //list.style.color = "white";

  // Query a reference to a subcollection
  const querySnapshotTermine = await getDocs(
    collection(db, "users", auth.currentUser.uid, "Termine")
  );
  // Iterate over the query snapshot and add each appointment to the list
  querySnapshotTermine.forEach((doc) => {
    createButton(
      doc.data().appointmentTitle,
      trimDateToTime(doc.data().appointmentDate),
      appointmentPrioToNumber(doc.data().appointmentPriority)
    );
  });

  // Append the list to the main content element
  mainContent.appendChild(list);
}

function styleCardByPrio(prio, card) {
  switch (prio) {
    case "1":
      card.style.backgroundColor = "grey";
      break;
    case "2":
      card.style.backgroundColor = "blue";
      break;
    case "3":
      card.style.backgroundColor = "red";
      break;
  }
}

function createButton(appointmentTitle, appointmentDate, appointmentPriority) {
  const button = document.createElement("button");
  button.classList.add("Appointment-Button");
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.marginLeft = "2rem";
  button.style.marginBottom = "2rem";

  const textContainer = document.createElement("div");
  textContainer.style.display = "flex";
  textContainer.style.flexDirection = "column";
  textContainer.style.justifyContent = "space-between";
  textContainer.style.width = "100%";
  textContainer.style.height = "100%";
  textContainer.style.overflow = "hidden";

  const headerContainer = document.createElement("div");
  headerContainer.style.display = "flex";
  headerContainer.style.justifyContent = "space-between";
  headerContainer.style.marginLeft = "0rem";
  headerContainer.style.marginTop = "0rem";

  const headerText = document.createElement("p");
  headerText.textContent = appointmentTitle;
  headerContainer.appendChild(headerText);

  const headerTime = document.createElement("p");
  headerTime.textContent = appointmentDate;
  headerContainer.appendChild(headerTime);

  const priorityContainer = document.createElement("p");
  priorityContainer.textContent = appointmentPriority;
  headerContainer.appendChild(priorityContainer);

  textContainer.appendChild(headerContainer);
  button.appendChild(textContainer);

  styleCardByPrio(appointmentPriority, button);
  mainContent.appendChild(button);
  return button;
}

function trimDateToTime(dateString) {
  // Split the date string into an array of strings, using the `T` character as a delimiter.
  const dateParts = dateString.split("T");

  // Return the second part of the array, which contains the time.
  return dateParts[1];
}

function appointmentPrioToNumber(prio) {
  switch (prio) {
    case "niedrig":
      return "1";

    case "mittel":
      return "2";

    case "hoch":
      return "3";
  }
}
