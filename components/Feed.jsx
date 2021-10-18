import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
   return (
      <div className="max-w-4xl mx-auto">
         <main className="grid grid-cols-2 md:grid-cols-2 md:max-w-lg lg:grid-cols-3 lg:max-w-4xl xl:max-w-4xl mx-auto sm:max-w-xl ">
            <section className="col-span-2">
               <Stories />
               <Posts />
            </section>

            <section className="hidden md:inline-grid md:col-span-1">
               <div className="fixed ">
                  <MiniProfile />
                  <Suggestions />
               </div>
            </section>
         </main>
      </div>
   );
};

export default Feed;
