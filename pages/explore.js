import Page from "../components/Page";
import { Fragment } from "react";
import { getRandomPosts } from "../actions/PostAction";

const Explore = ({ posts }) => {
   return (
      <Fragment>
         <Page title="Instagram | Explore" />
         <div className="max-w-4xl mx-auto mt-5">
            <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 xl:-mx-2">
               {posts.map((post) => {
                  if (post.image)
                     return (
                        <div
                           class="my-1 px-1 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-full md:w-1/2 xl:my-2 xl:px-2"
                           key={post.id}
                        >
                           <img src={post.image} alt="post" />
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
   console.log(posts);
   return {
      props: { posts }, // will be passed to the page component as props
   };
}

export default Explore;
