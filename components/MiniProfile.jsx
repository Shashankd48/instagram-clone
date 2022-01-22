import { signOut, useSession } from "next-auth/react";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

const MiniProfile = () => {
   const { data: session } = useSession();

   return (
      <div className="flex items-center justify-between mt-14">
         {session && (
            <Fragment>
               <div className="flex items-center">
                  <div className="p-[2px] rounded-full border">
                     <div className="w-12 h-12 relative">
                        <Link href={`/${session.user.username}`}>
                           <a>
                              <Image
                                 src={session.user.image}
                                 alt="user profile"
                                 className="rounded-full cursor-pointer"
                                 layout="fill"
                              />
                           </a>
                        </Link>
                     </div>
                  </div>

                  <div className="ml-3">
                     <h2 className="font-medium text-sm">
                        <Link href={`/${session.user.username}`}>
                           <a>{session.user.username}</a>
                        </Link>
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
