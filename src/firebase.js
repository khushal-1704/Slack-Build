// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzpXnDJAlt8NRx8KU8TTiPF3bkmYbhjnI",
    authDomain: "slack-clone-550ae.firebaseapp.com",
    projectId: "slack-clone-550ae",
    storageBucket: "slack-clone-550ae.appspot.com",
    messagingSenderId: "621864514865",
    appId: "1:621864514865:web:7727bbce43da50d30fac10",
    measurementId: "G-KQ5MH6B1TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);