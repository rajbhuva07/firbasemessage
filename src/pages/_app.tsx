import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  onMessageListener, requestForToken, requestNotificationPermission } from '../firebase';
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
          console.log('Service Worker registered with scope:', registration.scope);
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      }
    };

    const initializeMessaging = async () => {
      try {
        await requestNotificationPermission();  // Ensure permission is requested
        await requestForToken();

        onMessageListener().then((payload) => {
          console.log('Received foreground message:', payload);

          const notificationTitle = payload.notification.title || 'Default Title';
          const notificationOptions = {
            body: payload.notification.body || 'Default Body',
            icon: '/firebase-logo.png'  // Ensure this path is correct
          };

          // Check if permission is granted before showing notification
          if (Notification.permission === 'granted') {
            new Notification(notificationTitle, notificationOptions);
          } else {
            console.log('Notification permission not granted.');
          }
        }).catch((err) => console.error('Failed to receive foreground message', err));
      } catch (err) {
        console.error('Error initializing messaging:', err);
      }
    };

    registerServiceWorker();
    initializeMessaging();

  }, []);


  return <Component {...pageProps} />;
}
