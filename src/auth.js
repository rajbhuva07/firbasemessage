// src/auth.js

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const cookies = new Cookies(null, null); // Replace with actual req, res objects in server-side context
    cookies.set('auth_token', await user.getIdToken(), { path: '/', maxAge: 3600, httpOnly: true });

    return user;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export { signUp };
