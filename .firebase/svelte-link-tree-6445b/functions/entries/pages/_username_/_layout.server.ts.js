import { collection, query, where, limit, getDocs } from "firebase/firestore";
import { d as db } from "../../../chunks/firebase.js";
const load = async ({ locals, params }) => {
  const uid = locals.userID;
  const collectionRef = collection(db, "users");
  const q = query(
    collectionRef,
    where("username", "==", params.username),
    limit(1)
  );
  const snapshot = await getDocs(q);
  snapshot.docs[0]?.exists();
  const data = snapshot.docs[0]?.data();
  return {
    username: data.username,
    photoURL: data.photoURL,
    bio: data.bio,
    links: data.links ?? [],
    check: uid ?? null
  };
};
export {
  load
};
