import { db } from "../firebase";
import {
   query,
   collection,
   where,
   getDocs,
   orderBy,
   limit,
} from "firebase/firestore";

export async function getUserByUsername(username) {
   const q = query(collection(db, "users"), where("username", "==", username));
   const querySnapshot = await getDocs(q);
   let user;
   querySnapshot.forEach((doc) => {
      user = {
         ...doc.data(),
         timestamp: doc.data().timestamp?.toDate().toString(),
         id: doc.id,
      };
   });
   return user;
}

export async function getUsers(userCount) {
   const q = query(
      collection(db, "users"),
      orderBy("timestamp", "desc"),
      limit(userCount)
   );
   const querySnapshot = await getDocs(q);
   let user = [];
   querySnapshot.forEach((doc) => {
      user.push({
         ...doc.data(),
         timestamp: doc.data().timestamp?.toDate().toString(),
         id: doc.id,
      });
   });
   return user;
}
