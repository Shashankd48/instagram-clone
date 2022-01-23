import { db } from "../firebase";
import {
   query,
   collection,
   where,
   getDocs,
   orderBy,
   limit,
   startAfter,
} from "firebase/firestore";

export async function getPosts(postCount, previousDoc) {
   const q = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc"),
      startAfter(previousDoc),
      limit(postCount)
   );
   const querySnapshot = await getDocs(q);
   const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
   let posts = [];
   querySnapshot.forEach((doc) => {
      posts.push({
         id: doc.id,
         ...doc.data(),
         timestamp: doc.data().timestamp?.toDate().toString(),
      });
   });
   return { posts, lastVisible };
}

export async function getPostsByUsername(username, postCount) {
   const q = query(
      collection(db, "posts"),
      where("username", "==", username),
      limit(postCount),
      orderBy("timestamp", "desc")
   );
   const querySnapshot = await getDocs(q);
   let posts = [];
   querySnapshot.forEach((doc) => {
      posts.push({
         id: doc.id,
         ...doc.data(),
         timestamp: doc.data().timestamp?.toDate().toString(),
      });
   });
   return posts;
}

export async function getRandomUsers(userCount) {
   const q = query(
      collection(db, "user"),
      limit(postCount),
      orderBy("timestamp", "desc")
   );
   const querySnapshot = await getDocs(q);
   let posts = [];
   querySnapshot.forEach((doc) => {
      posts.push({
         id: doc.id,
         ...doc.data(),
         timestamp: doc.data().timestamp?.toDate().toString(),
      });
   });
   return posts;
}
