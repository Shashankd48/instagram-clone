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
import moment from "moment";

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
