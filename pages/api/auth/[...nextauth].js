import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {
   doc,
   getDoc,
   addDoc,
   collection,
   serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { getUserByUsername } from "../../../actions/UserAction";

export default NextAuth({
   // Configure one or more authentication providers
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      // ...add more providers here
   ],
   secret: process.env.SECRET,
   pages: {
      signIn: "/auth/signin",
   },
   callbacks: {
      async session({ session, token, user }) {
         const username = session.user.email.split("@")[0];
         let foundUser = await getUserByUsername(username);

         console.log("log: foundUser", foundUser);

         if (!foundUser) {
            // Create a user in 'users' collection
            await addDoc(collection(db, "users"), {
               username: username,
               email: session.user.email,
               name: session.user.name,
               image: session.user.image,
               postCount: 0,
               followerCount: 0,
               followingCount: 0,
               timestamp: serverTimestamp(),
            });
            foundUser = await getUserByUsername(username);
         }

         session.user = {
            ...session.user,
            ...foundUser,
            username,
            uid: token.sub,
         };

         return session;
      },
   },
});
