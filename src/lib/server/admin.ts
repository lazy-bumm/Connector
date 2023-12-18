import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import pkg from 'firebase-admin';

try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: import.meta.env.FB_PROJECT_ID,
      clientEmail: import.meta.env.FB_CLIENT_EMAIL,
      privateKey: import.meta.env.FB_PRIVATE_KEY,
    }),
  });
} catch (err: any) {
  if (!/already exists/u.test(err.message)) {
    console.error('Firebase Admin Error: ', err.stack)
  }
}


export const adminDB = getFirestore();
export const adminAuth = getAuth();