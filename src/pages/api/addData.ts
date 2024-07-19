// import { NextApiRequest, NextApiResponse } from 'next';
// import { db } from '../../firebase';
// import { collection, addData } from 'firebase/firestore';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       // Process your data saving logic
//       const data = await addData(req.body);

//       // Respond with JSON
//       res.status(200).json({ success: true, data });
//     } catch (error) {
//       // Handle errors and respond with appropriate JSON error message
//       res.status(500).json({ success: false, error: error.message });
//     }
//   } else {
//     // Respond with method not allowed if not POST
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }