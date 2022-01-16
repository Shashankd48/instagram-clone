import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { getPosts } from "../actions/PostAction";

export default function Home() {
   return (
      <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide ">
         <Feed />
         <Modal />
      </div>
   );
}

export async function getServerSideProps(context) {
   const posts = await getPosts(10);

   console.log("Posts", posts);

   return {
      props: { posts }, // will be passed to the page component as props
   };
}
