import { db } from "../firebase";
import { query, collection, where, getDocs } from "firebase/firestore";

export async function getUserByUsername(username) {
   const q = query(collection(db, "users"), where("username", "==", username));
   const querySnapshot = await getDocs(q);
   let user;
   querySnapshot.forEach((doc) => {
      user = {
         ...doc.data(),
         timestamp: doc.data().timestamp?.toDate().toString(),
      };
   });
   return user;
}
