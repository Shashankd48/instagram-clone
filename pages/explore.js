import Page from "../components/Page";
import { Fragment, useEffect, useState } from "react";
import { getRandomPosts } from "../actions/PostAction";
import Image from "next/image";
import LoadMoreButton from "../components/LoadMoreButton";
import {
   collection,
   query,
   orderBy,
   startAfter,
   limit,
   getDocs,
   setDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const Explore = ({ ssrPosts, previousDoc }) => {
   const [posts, setPosts] = useState([]);
   const [postCount, setPostCount] = useState(10);
   const [isLoading, setIsLoading] = useState(false);
   // const [docRef, setDocRef] = useState(
   //    previousDoc ? JSON.parse(previousDoc) : ""
   // );
   const [docRef, setDocRef] = useState("");

   console.log("log: docRef", docRef);

   useEffect(() => {
      fetchPosts();
   }, [db]);

   const fetchPosts = async () => {
      // NOTE: Test
      // Query the first page of docs
      const first = query(
         collection(db, "posts"),
         orderBy("timestamp", "desc"),
         limit(5)
      );
      const documentSnapshots = await getDocs(first);

      // Get the last visible document
      const lastVisible =
         documentSnapshots.docs[documentSnapshots.docs.length - 1];
      console.log("log: last", lastVisible);
      setDocRef(lastVisible);

      let tempPosts = [];

      documentSnapshots.forEach((doc) => {
         tempPosts.push({
            id: doc.id,
            ...doc.data(),
            timestamp: doc.data().timestamp?.toDate().toString(),
         });
      });

      setPosts(tempPosts);
   };

   const loadMore = async () => {
      // setIsLoading(true);
      // const { posts: newPosts } = await getRandomPosts(5, docRef);

      // if (newPosts.length > 0) setPosts([...posts, ...newPosts]);
      // // setPostCount(postCount + 10);
      // setIsLoading(false);

      console.log("log: tempPosts", tempPosts);
      // setPosts([...posts, ...tempPosts]);

      // Construct a new query starting at this document,
      // get the next 25 cities.
      const next = query(
         collection(db, "posts"),
         orderBy("timestamp", "desc"),
         startAfter(docRef),
         limit(5)
      );

      const documentSnapshots = await getDocs(next);

      const lastVisible =
         documentSnapshots.docs[documentSnapshots.docs.length - 1];

      setDocRef(lastVisible);

      let tempPosts = [];
      documentSnapshots.forEach((doc) => {
         tempPosts.push({
            id: doc.id,
            ...doc.data(),
            timestamp: doc.data().timestamp?.toDate().toString(),
         });
      });

      console.log("log: new tempPosts", tempPosts);
      setPosts([...posts, ...tempPosts]);
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
   const data = await getRandomPosts(5, "");

   return {
      props: {
         previousDoc: data.previousDoc ? JSON.stringify(data.previousDoc) : "",
         ssrPosts: data.posts,
      },
   };
}

export default Explore;
