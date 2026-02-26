// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNmhGuP_v-GNLDE7KV_Y0xNn1Ih8WhyOU",
  authDomain: "creator-ai-toolkit-af68a.firebaseapp.com",
  projectId: "creator-ai-toolkit-af68a",
  storageBucket: "creator-ai-toolkit-af68a.appspot.com",
  messagingSenderId: "962751771924",
  appId: "1:962751771924:web:b66ddce257c9b19c56fe01"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.firebaseApp = {
  auth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
};
