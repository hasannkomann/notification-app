// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);
const firebaseConfig = {
  apiKey: "AIzaSyCfiuDJWzZwKQjlfjFauvxiVYPv704T8go",
  authDomain: "notification-b41b2.firebaseapp.com",
  projectId: "notification-b41b2",
  storageBucket: "notification-b41b2.appspot.com",
  messagingSenderId: "928672791444",
  appId: "1:928672791444:web:65c086e7623fba3f692d81",
};
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  //   // Customize notification here
  //   const notificationTitle = "Background Message Title";
  //   const notificationOptions = {
  //     body: "Background Message body.",
  //     icon: "/firebase-logo.png",
  //   };

  //   self.registration.showNotification(notificationTitle, notificationOptions);
});
