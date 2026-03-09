<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB46vgL9d6dOkPIg-HzfHN_lB1IX3RSvv8",
    authDomain: "the-money-mind-shift-60f9a.firebaseapp.com",
    projectId: "the-money-mind-shift-60f9a",
    storageBucket: "the-money-mind-shift-60f9a.firebasestorage.app",
    messagingSenderId: "756290997216",
    appId: "1:756290997216:web:a66b86d07539c83273f985",
    measurementId: "G-ZXWTGJ9WFW"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

document.getElementById("loginForm")?.addEventListener("submit", e=>{
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email,password)
    .then(()=>window.location="dashboard.html")
    .catch(err=>alert(err.message));
});
