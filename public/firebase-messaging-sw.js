

// // importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js');
// // importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js');

// const firebaseConfig = {
//   apiKey: "AIzaSyDJBKf7em2pDGmDTvy0E9SzItlJYTgwlZA",
//   authDomain: "apipractice-21c1d.firebaseapp.com",
//   projectId: "apipractice-21c1d",
//   storageBucket: "gs://apipractice-21c1d.appspot.com",
//   messagingSenderId: "921585173565",
//   appId: "1:921585173565:web:bfec9570f0d8a23482d654",
//   measurementId: "G-VPLC1ECFVP"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log('Received background message: ', payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDJBKf7em2pDGmDTvy0E9SzItlJYTgwlZA",
  authDomain: "apipractice-21c1d.firebaseapp.com",
  projectId: "apipractice-21c1d",
  storageBucket: "apipractice-21c1d.appspot.com",
  messagingSenderId: "921585173565",
  appId: "1:921585173565:web:bfec9570f0d8a23482d654",
  measurementId: "G-VPLC1ECFVP"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: '/firebase-logo.png', // Customize as needed
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  
 
});