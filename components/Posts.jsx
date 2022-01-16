import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const posts = [
   {
      id: 123,
      username: "jfriday464",
      userImg:
         "https://images.pexels.com/photos/9669217/pexels-photo-9669217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      img: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Beautiful view 😘",
   },
   {
      id: 124,
      username: "soniya123",
      userImg:
         "https://images.pexels.com/photos/3118694/pexels-photo-3118694.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      img: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Panama beach 🏖 chilling with friends🤗.",
   },
   {
      id: 125,
      username: "eva_roy99",
      userImg:
         "https://images.pexels.com/photos/8894629/pexels-photo-8894629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      img: "https://images.pexels.com/photos/2215380/pexels-photo-2215380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      caption: "I have love affair with mountains.",
   },
   {
      id: 126,
      username: "natasha14",
      userImg:
         "https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      img: "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      caption: "I love sunset and i lover myself.",
   },
];

const Posts = () => {
   const [posts, setPosts] = useState([]);

   useEffect(
      () =>
         onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
               setPosts(snapshot.docs);
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
               username={post.data().username}
               img={post.data().image}
               userImg={post.data().profileImg}
               caption={post.data().caption}
            />
         ))}
      </div>
   );
};

export default Posts;
