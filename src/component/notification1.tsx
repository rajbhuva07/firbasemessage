// import { onMessageListener } from '@/firebase';
// import React, { useState, useEffect } from 'react';

// interface Notification {
//   title: string;
//   body: string;
// }

// const CustomNotification: React.FC<{ notification: Notification; onClose: () => void }> = ({ notification, onClose }) => {
//  console.log("notificationtttttttttttt",notification)
//     return (
//     <div style={{
//       position: 'fixed',
//       bottom: '1rem',
//       right: '1rem',
//       padding: '1rem',
//       background: '#333',
//       color: '#fff',
//       borderRadius: '5px',
//       zIndex: 9999,
//     }}>
//       <h4>{notification.title}</h4>
//       <p>{notification.body}</p>
//       <button onClick={onClose} style={{ marginTop: '0.5rem' }}>Close</button>
//     </div>
//   );
// };

// const NotificationComponent: React.FC = () => {
//   const [notification, setNotification] = useState<Notification | null>(null);
//   const [showNotification, setShowNotification] = useState(false);

//   const handleClose = () => {
//     setShowNotification(false);
//   };

//   const notify = () => {
//     if (notification) {
//       setShowNotification(true);
//       console.log(notification, "notification");
//     }
//   };

//   useEffect(() => {
//     if (notification) {
//       notify();
//     }
//   }, [notification]);

//   useEffect(() => {
//     // Replace with your logic to get the token and listen for messages
//     // Uncomment and implement the following lines if needed
//     const unsubscribe = onMessageListener()
//       .then((payload: any) => {
//         setNotification({
//           title: payload.notification.title || '',
//           body: payload.notification.body || ''
//         });
//       })
//       .catch((err: any) => console.log('Failed to listen for messages:', err));
//     return () => {
//       if (typeof unsubscribe === 'function') {
//         unsubscribe();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     // Request notification permission on component mount
//     if ('Notification' in window) {
//       Notification.requestPermission().then((permission) => {
//         console.log('Notification permission status:', permission);
//       });
//     }
//   }, []);

//   return (
//     <>
//       {showNotification && notification && (
//         <CustomNotification
//           notification={notification}
//           onClose={handleClose}
//         />
//       )}
//       {/* Your component JSX here */}
//     </>
//   );
// };

// export default NotificationComponent;