import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

const Feed = () => {
   const { data: session } = useSession();
   return (
      <main
         className={`grid grid-cols-2 md:grid-cols-2 md:max-w-lg lg:grid-cols-3 lg:max-w-4xl xl:max-w-4xl mx-auto sm:max-w-xl ${
            !session && "!grid-cols-2 !max-w-xl"
         }`}
      >
         <section className="col-span-2">
            <Stories />
            <Posts />
         </section>

         {session && (
            <section className="hidden md:inline-grid md:col-span-1 pl-4">
               <div className="fixed w-full max-w-[280px]">
                  <MiniProfile />
                  <Suggestions />
               </div>
            </section>
         )}
      </main>
   );
};

export default Feed;
