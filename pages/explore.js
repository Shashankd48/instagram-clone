import Page from "../components/Page";
import { Fragment, useState } from "react";
import { getRandomPosts } from "../actions/PostAction";
import Image from "next/image";
import LoadMoreButton from "../components/LoadMoreButton";

const Explore = ({ ssrPosts, previousDoc, lastDoc }) => {
   const [posts, setPosts] = useState(ssrPosts || []);
   const [postCount, setPostCount] = useState(10);
   const [isLoading, setIsLoading] = useState(false);
   const [docRef, setDocRef] = useState(
      previousDoc ? JSON.parse(previousDoc) : ""
   );

   console.log(docRef);
   console.log(lastDoc);

   const loadMore = async () => {
      setIsLoading(true);
      const { posts: newPosts } = await getRandomPosts(5, docRef);

      if (newPosts.length > 0) setPosts([...posts, ...newPosts]);
      // setPostCount(postCount + 10);
      setIsLoading(false);
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
               <LoadMoreButton
                  onClick={loadMore}
                  text={isLoading ? "Loading..." : "Load more"}
               />
            </div>
         </div>
      </Fragment>
   );
};

export async function getServerSideProps(context) {
   const data = await getRandomPosts(5, 0);

   console.log(data);

   return {
      props: {
         previousDoc: data.previousDoc ? JSON.stringify(data.previousDoc) : "",
         ssrPosts: data.posts,
      },
   };
}

export default Explore;
