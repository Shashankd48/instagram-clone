import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";
import postImage from "/public/insta-logo.png";

const Posts = () => {
   const [posts, setPosts] = useState([]);

   useEffect(
      () =>
         onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
               const temp = [];
               snapshot.docs.forEach((doc) => {
                  temp.push({
                     id: doc.id,
                     username: doc.data().username,
                     image:
                        process.env.LOADIMAGE === "false"
                           ? postImage
                           : doc.data().image,
                     caption: doc.data().caption,
                     location: doc.data().location,
                     profileImg: doc.data().profileImg,
                  });
               });

               setPosts(temp);
            }
         ),
      [db]
   );

   return (
      <div>
         {posts.map((post) => (
            <Post
               key={post.id}
               id={post.id}
               username={post.username}
               img={post.image}
               userImg={post.profileImg}
               caption={post.caption}
               location={post.location}
            />
         ))}
      </div>
   );
};

export default Posts;
