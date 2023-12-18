import { collection, query, where, limit, getDocs } from "firebase/firestore";
import { d as db } from "../../../chunks/firebase.js";
import { e as error } from "../../../chunks/index.js";
const load = async ({ locals, params }) => {
  const uid = locals.userID;
  const collectionRef = collection(db, "users");
  const q = query(
    collectionRef,
    where("username", "==", params.username),
    limit(1)
  );
  const snapshot = await getDocs(q);
  const exists = snapshot.docs[0]?.exists();
  const data = snapshot.docs[0]?.data();
  if (!exists) {
    throw error(404, "that user does not exist!");
  }
  if (!data.published) {
    error(403, { message: `The profile of @${data.username} is not public!` });
  }
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
