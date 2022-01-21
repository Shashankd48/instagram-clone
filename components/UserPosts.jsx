import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getPostsByUsername } from "../actions/PostAction";
import Image from "next/image";

const UserPosts = () => {
   const { data: session } = useSession();
   const [posts, setPosts] = useState([]);

   const getPosts = async () => {
      const data = await getPostsByUsername(session.user.username, 20);
      console.log("log: data", data);
      setPosts(data);
   };

   useEffect(() => {
      console.log("log: session", session);
      if (session) getPosts();
   }, [session]);

   return (
      <div className="mt-4 overflow-x-hidden">
         <div className="flex flex-wrap -mx-4 overflow-hidden">
            {posts.map((post) => {
               if (post.image)
                  return (
                     <div
                        className="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 md:my-4 md:px-4"
                        key={post.id}
                     >
                        <div className="w-full xl:h-[300px] md:h-[240px] h-[150px] sm:h-[180px] relative object-contain">
                           <Image
                              src={post.image}
                              alt="post"
                              layout="fill"
                              objectFit="cover"
                           />
                        </div>
                     </div>
                  );
            })}
         </div>
      </div>
   );
};

export default UserPosts;
