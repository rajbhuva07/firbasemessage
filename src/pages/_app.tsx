import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  onMessageListener, requestForToken } from '../firebase';
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }

    // Request token
    requestForToken();

    // Listen for foreground messages
    const listenForMessages = async () => {
      try {
        await onMessageListener();
      } catch (err) {
        console.error('Failed to receive foreground message', err);
      }
    };

    listenForMessages();

    // No need to return an unsubscribe function because onMessageListener does not provide one

  }, []);


  return <Component {...pageProps} />;
}
