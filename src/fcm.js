


import { getToken, onTokenRefresh, onMessage } from 'firebase/messaging';
import { messaging } from './firebase';


const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.warn('Notification permission denied.');
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };
  
  export { requestNotificationPermission };