import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
   return (
      <div className="max-w-4xl mx-auto">
         <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            <section className="col-span-2">
               <Stories />
               <Posts />
            </section>
         </main>
      </div>
   );
};

export default Feed;
