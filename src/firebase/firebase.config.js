// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRzIQCuKXasiUfkkTq3zYlJgaq-tpbohI",
  authDomain: "food-store-8c281.firebaseapp.com",
  projectId: "food-store-8c281",
  storageBucket: "food-store-8c281.appspot.com",
  messagingSenderId: "968302434109",
  appId: "1:968302434109:web:4fe8284fcf768e25ee1754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;