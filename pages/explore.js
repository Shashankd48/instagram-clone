import Page from "../components/Page";
import { Fragment } from "react";
import { getRandomPosts } from "../actions/PostAction";
import Image from "next/image";

const Explore = ({ posts }) => {
   return (
      <Fragment>
         <Page title="Instagram | Explore" />
         <div className="max-w-4xl mx-auto mt-4 overflow-x-hidden">
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
      </Fragment>
   );
};

export async function getServerSideProps(context) {
   const posts = await getRandomPosts(10);
   return {
      props: { posts }, // will be passed to the page component as props
   };
}

export default Explore;
