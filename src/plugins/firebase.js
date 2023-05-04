// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfiuDJWzZwKQjlfjFauvxiVYPv704T8go",
  authDomain: "notification-b41b2.firebaseapp.com",
  projectId: "notification-b41b2",
  storageBucket: "notification-b41b2.appspot.com",
  messagingSenderId: "928672791444",
  appId: "1:928672791444:web:65c086e7623fba3f692d81",
};

// Initialize Firebase
const apps = getApps();

const app = !apps.length ? initializeApp(firebaseConfig) : apps[0];

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
export const messaging = getMessaging(app);
