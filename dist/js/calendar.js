/**
const dayArray = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];

const dayElements = document.querySelectorAll(".Day-Class");

dayElements.forEach((dayElement) => {
  let headerTag = document.createElement("h5");
  headerTag.classList.add("text-h5");
  const dataIndex = dayElement.getAttribute("data-index");
  const dayName = dayArray[dataIndex];
  headerTag.textContent = dayName; 
  
  dayElement.appendChild(headerTag); // Hängen Sie das h4-Element an das dayElement an
});

 */
