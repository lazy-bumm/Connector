import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { d as derived, w as writable } from "./index2.js";
const firebaseConfig = {
  apiKey: "AIzaSyDA-t-gmxFNxr5B3KLnuQ9AhqACUyz1D3E",
  authDomain: "svelte-link-tree-6445b.firebaseapp.com",
  projectId: "svelte-link-tree-6445b",
  storageBucket: "svelte-link-tree-6445b.appspot.com",
  messagingSenderId: "580347255981",
  appId: "1:580347255981:web:de4f870f5cade3fdd9fa24",
  measurementId: "G-WN3NGKFC82"
};
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
getStorage();
function userStore() {
  let unsubscribe;
  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2
    };
  }
  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user2) => {
      set(user2);
    });
    return () => unsubscribe();
  });
  return {
    subscribe
  };
}
const user = userStore();
function docStore(path) {
  let unsubscribe;
  const docRef = doc(db, path);
  const { subscribe } = writable(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set(snapshot.data() ?? null);
    });
    return () => unsubscribe();
  });
  return {
    subscribe,
    ref: docRef,
    id: docRef.id
  };
}
const userData = derived(user, ($user, set) => {
  if ($user) {
    return docStore(`users/${$user.uid}`).subscribe(set);
  } else {
    set(null);
  }
});
export {
  user as a,
  db as d,
  userData as u
};
