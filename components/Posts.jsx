import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Fragment, useEffect, useState } from "react";
import { db } from "../firebase";
import Loading from "./Loading";
import NoPostFound from "./NoPostFound";
import Post from "./Post";
import postImage from "/public/insta-logo.png";

const Posts = () => {
   const [posts, setPosts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      return onSnapshot(
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
            setIsLoading(false);
         }
      );
   }, [db]);

   return (
      <div>
         {isLoading ? (
            <Loading />
         ) : (
            <Fragment>
               {posts.length > 0 ? (
                  posts.map((post) => (
                     <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        img={post?.image ? post.image : postImage}
                        userImg={post.profileImg}
                        caption={post.caption}
                        location={post.location}
                     />
                  ))
               ) : (
                  <NoPostFound />
               )}
            </Fragment>
         )}
      </div>
   );
};

export default Posts;
