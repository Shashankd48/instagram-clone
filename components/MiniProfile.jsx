import { signOut, useSession } from "next-auth/react";
import { Fragment } from "react";

const MiniProfile = () => {
   const { data: session } = useSession();
   return (
      <div className="flex items-center justify-between mt-14">
         {session && (
            <Fragment>
               <div className="flex items-center">
                  <img
                     src={session.user.image}
                     alt="user profile"
                     className="rounded-full border p-[2px] w-14 h-14"
                  />

                  <div className="ml-3">
                     <h2 className="font-medium text-sm">
                        {session.user.username}
                     </h2>
                     <h3 className="text-sm text-gray-600">
                        {session.user.name}
                     </h3>
                  </div>
               </div>
               <button
                  className="text-blue-500 text-xs font-medium"
                  onClick={signOut}
               >
                  Log out
               </button>
            </Fragment>
         )}
      </div>
   );
};

export default MiniProfile;
