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
    // Query a reference to a subcollection
    const querySnapshot = await getDocs(
      collection(db, "users", auth.currentUser.uid, "Termine")
    );
  
    // Create a list element to store the appointments
    const list = document.createElement("ul");
    //list.style.paddingLeft = "25px";
    //list.style.color = "white";
  
    // Iterate over the query snapshot and add each appointment to the list
    querySnapshot.forEach((doc) => {
      createButton(doc.data().appointmentTitle, doc.data().appointmentDate, doc.data().appointmentPriority)
    });
  
    // Append the list to the main content element
    mainContent.appendChild(list);
  }
  
  function createCard(appointmentTitle, appointmentDate, appointmentPriority) {
    // Erstellen des HTML-Elements für die Card
    const card = document.createElement('div');
    card.classList.add('appointment-card');
  
    // Erstellen des Titels für die Card
    const title = document.createElement('h2');
    title.textContent = appointmentTitle;
  
    // Erstellen des Datums für die Card
    const date = document.createElement('p');
    date.textContent = appointmentDate;

  
  
    // Hinzufügen des Titels und des Datums zur Card
    card.appendChild(title);
    card.appendChild(date);
    card.style.backgroundColor = "green";
    card.style.width = "25%";
  
    // Zurückgeben der Card
    styleCardByPrio(appointmentPriority, card);
    mainContent.appendChild(card);
  }
  
  function styleCardByPrio(prio, card){
        switch (prio) {
            case "niedrig" : card.style.backgroundColor = "grey";
            break;
            case "mittel" : card.style.backgroundColor = "blue";
            break;
            case "hoch" : card.style.backgroundColor = "red";
            break;
        }
  }

  function createButton(appointmentTitle, appointmentDate, appointmentPriority) {
    const button = document.createElement("button");
    button.classList.add("Appointment-Button");
    button.style.backgroundColor = "red";
    button.style.color = "white";
    button.style.marginLeft = "3rem";
  
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