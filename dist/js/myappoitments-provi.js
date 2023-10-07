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
    list.style.paddingLeft = "25px";
    list.style.color = "white";
  
    // Iterate over the query snapshot and add each appointment to the list
    querySnapshot.forEach((doc) => {
      createCard(doc.data().appointmentTitle, doc.data().appointmentDate, doc.data().appointmentPriority)
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
