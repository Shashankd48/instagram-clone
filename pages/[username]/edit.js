import Image from "next/image";
import { getUserByUsername } from "../../actions/UserAction";

const EditProfile = ({ user }) => {
   return (
      <main className="mt-5 border py-3 px-5">
         <article className="w-1/2 m-auto">
            <div className="flex flex-wrap items-center mt-5">
               <div className="w-[100px] overflow-hidden  pl-5">
                  <div className="w-10 h-10 relative">
                     <Image
                        src={user.image}
                        alt="user profile"
                        className="rounded-full"
                        layout="fill"
                        objectFit="contain"
                     />
                  </div>
               </div>

               <div className="w-auto -ml-2">
                  <h1 className="text-lg">{user.username}</h1>
                  <p className="text-sm font-medium tracking-wide text-blue-500 -mt-1">
                     Change profile photo
                  </p>
               </div>
            </div>

            <form className="mt-5">
               <div className="flex flex-wrap items-center mt-5">
                  <aside className="w-[100px] overflow-hidden text-right">
                     <label
                        htmlFor="name"
                        className="text-md font-medium tracking-wide text-gray-800"
                     >
                        Name
                     </label>
                  </aside>
                  <div className="-ml-2 overflow-hidden">
                     <input
                        type="text"
                        label="name"
                        value={user.name}
                        className="py-1 px-2 w-[300px] border-1 border-gray-300 rounded-sm active:border-gray-900"
                     />
                  </div>
               </div>

               <div className="flex flex-wrap items-center mt-5">
                  <aside className="w-[100px] overflow-hidden  border">
                     <label
                        htmlFor="name"
                        className="text-md font-medium tracking-wide text-gray-800"
                     >
                        Username
                     </label>
                  </aside>
                  <div className="-ml-2 overflow-hidden">
                     <input
                        type="text"
                        label="name"
                        value={user.username}
                        className="py-1 px-2 w-[300px] border-1 border-gray-300 rounded-sm active:border-gray-900"
                     />
                  </div>
               </div>
            </form>
         </article>
      </main>
   );
};

export async function getServerSideProps(context) {
   const user = await getUserByUsername(context.params.username);

   return {
      props: { user: user ? user : null },
   };
}

export default EditProfile;
