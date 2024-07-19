

import firebase from 'firebase/app';
import 'firebase/messaging';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDJBKf7em2pDGmDTvy0E9SzItlJYTgwlZA",
  authDomain: "apipractice-21c1d.firebaseapp.com",
  projectId: "apipractice-21c1d",
  storageBucket: "gs://apipractice-21c1d.appspot.com",
  messagingSenderId: "921585173565",
  appId: "1:921585173565:web:bfec9570f0d8a23482d654",
  measurementId: "G-VPLC1ECFVP"
};


let messaging;
let app;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  messaging = getMessaging(app);

  // Request for token
  getToken(messaging, { vapidKey: "BHy4-XfzG6tE9DdJUNqjC3_a-qolbjcEHzI16OrmK2UebdtP4NtHEM84FI34C2u1UzmzQ07ROhT9mjIeipNuY9w" })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });


}

// Exporting functions to be used in other components
export const requestForToken = async () => {
  if (messaging) {
    try {
      const currentToken = await getToken(messaging, { vapidKey: "BHy4-XfzG6tE9DdJUNqjC3_a-qolbjcEHzI16OrmK2UebdtP4NtHEM84FI34C2u1UzmzQ07ROhT9mjIeipNuY9w" });
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        return currentToken;
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err);
    }
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    if (messaging) {
      console.log(messaging,"messaging")
      onMessage(messaging, (payload) => {
        console.log("payload=======",payload)
        resolve(payload);
      });
    }
  });
  export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    console.log('Notification permission granted.');
  } else {
    console.log('Notification permission denied.');
  }
};