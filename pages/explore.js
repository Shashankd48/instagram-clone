import Page from "../components/Page";
import { Fragment, useEffect, useState } from "react";
import { getPosts } from "../actions/PostAction";
import Image from "next/image";
import LoadMoreButton from "../components/LoadMoreButton";
import { db } from "../firebase";
import Loading from "../components/Loading";

const Explore = () => {
   const [posts, setPosts] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [docRef, setDocRef] = useState("");

   useEffect(() => {
      fetchPosts();
   }, [db]);

   const fetchPosts = async () => {
      setIsLoading(true);
      const data = await getPosts(6, docRef);
      if (data) {
         setPosts(data.posts);
         setDocRef(data.lastVisible);
      }
      setIsLoading(false);
   };

   const loadMore = async () => {
      const data = await getPosts(6, docRef);
      if (data) {
         setPosts([...posts, ...data.posts]);
         setDocRef(data.lastVisible);
      }
   };

   return (
      <Fragment>
         <Page title="Instagram | Explore" />
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

            <div className="flex justify-center mb-5">
               {isLoading ? (
                  <Loading />
               ) : (
                  <LoadMoreButton onClick={loadMore} text="Load more" />
               )}
            </div>
         </div>
      </Fragment>
   );
};

export default Explore;
