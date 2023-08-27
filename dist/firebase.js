  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCPG1Sss9F8IUY91tiriI0V9DRuBadPG94",
    authDomain: "weeklyplanner2-d6985.firebaseapp.com",
    databaseURL: "https://weeklyplanner2-d6985-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "weeklyplanner2-d6985",
    storageBucket: "weeklyplanner2-d6985.appspot.com",
    messagingSenderId: "429065035897",
    appId: "1:429065035897:web:6461c7c2a7421423d1f4a8",
    measurementId: "G-5JJFFK5F6R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const inputemail = document.getElementById("inputemail").textContent;
  const inputpw = document.getElementById("inputpassword").textContent;
  const inputpw2 = document.getElementById("inputpassword2").textContent; 
  const passwordMatch = inputpw === inputpw2;

  function signUpUser(){
    if(passwordMatch){
firebase.auth().createUserWithEmailAndPassword(inputemail,inputpw).catch(e=> console.log(e));
    }else{
      alert("Passwörter stimmen nicht überein!");
    }
  }



// ---------------------------------------------------------------------------------------------------------------------
document.getElementById("btnregister").addEventListener("click", x);

function x(){
    console.log("test");
}
