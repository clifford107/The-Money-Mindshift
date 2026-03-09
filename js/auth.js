<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyB46vgL9d6dOkPIg-HzfHN_lB1IX3RSvv8",
  authDomain: "the-money-mind-shift-60f9a.firebaseapp.com",
  projectId: "the-money-mind-shift-60f9a",
  storageBucket: "the-money-mind-shift-60f9a.firebasestorage.app",
  messagingSenderId: "756290997216",
  appId: "1:756290997216:web:a66b86d07539c83273f985",
  measurementId: "G-ZXWTGJ9WFW"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
document.getElementById("loginForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
</script>
