import { db } from "../firebase";
import {
   query,
   collection,
   where,
   getDocs,
   getDoc,
   doc,
   orderBy,
   deleteDoc,
   limit,
} from "firebase/firestore";

export async function getPosts(postCount, order) {
   const q = query(
      collection(db, "posts"),
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

export async function getRandomPosts(postCount) {
   const q = query(
      collection(db, "posts"),
      limit(postCount)
      // orderBy("timestamp", "desc")
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
