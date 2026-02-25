<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBNmhGuP_v-GNLDE7KV_Y0xNn1Ih8WhyOU",
    authDomain: "creator-ai-toolkit-af68a.firebaseapp.com",
    projectId: "creator-ai-toolkit-af68a",
    storageBucket: "creator-ai-toolkit-af68a.firebasestorage.app",
    messagingSenderId: "962751771924",
    appId: "1:962751771924:web:b66ddce257c9b19c56fe01",
    measurementId: "G-1JYTQVYCKE"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);

  window.firebase = { auth, db };
</script>
