// // pages/api/getData.js

// import { collection, getDocs } from "firebase/firestore";

// export default async function handler({req, res}:any) {
//   if (req.method === 'GET') {
//     try {
//       const querySnapshot = await getDocs(collection(db, "users"));
//       const users:any = [];
//       querySnapshot.forEach((doc) => {
//         users.push({ id: doc.id, ...doc.data() });
//       });
//       res.status(200).json(users);
//     } catch (e) {
//       res.status(500).json({ error: "Error getting documents: " + e.message });
//     }
//   } else {
//     res.status(405).end(); // Method Not Allowed
//   }
// }
