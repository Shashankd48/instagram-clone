import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { signIn, useSession } from "next-auth/react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";
import HomeIcon from "./Icons/HomeIcon";
import AddIcon from "./Icons/AddIcon";
import ExploreIcon from "./Icons/ExploreIcon";
import HeartIcon from "./Icons/HeartIcon";

const Header = () => {
   const { data: session } = useSession();
   const router = useRouter();
   const [, setOpen] = useRecoilState(modalState);

   const LogoSection = () => {
      return (
         <Fragment>
            <div className="relative hidden lg:inline-grid w-24 cursor-pointer flex-shrink-0">
               <Image
                  src="/instagram_logo.svg"
                  layout="fill"
                  objectFit="contain"
                  onClick={() => router.push("/")}
               />
            </div>

            <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
               <Image
                  src="/insta-logo.png"
                  layout="fill"
                  objectFit="contain"
                  onClick={() => router.push("/")}
               />
            </div>
         </Fragment>
      );
   };

   const SearchSection = () => {
      return (
         <div className="max-w-xs hidden sm:block">
            <div className="relative rounded-md ">
               <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
                  <SearchIcon className="h-5 w-5 text-gray-500 " />
               </div>
               <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded"
               />
            </div>
         </div>
      );
   };

   const ButtonsSection = () => {
      return (
         <div className="flex items-center justify-end space-x-6">
            <HomeIcon onClick={() => router.push("/")} className="nav-btn" />

            {session ? (
               <Fragment>
                  <AddIcon
                     onClick={() => setOpen(true)}
                     className="nav-btn nav-block"
                  />

                  <ExploreIcon
                     onClick={() => router.push("/explore")}
                     className="nav-btn"
                  />

                  <HeartIcon className="nav-btn" />

                  <img
                     src={session?.user?.image}
                     alt="User Avatar"
                     className="h-8 rounded-full cursor-pointer"
                     onClick={() => router.push(`/${session.user.username}`)}
                  />
               </Fragment>
            ) : (
               <button
                  onClick={signIn}
                  className="text-sm text-blue-500 font-medium"
               >
                  Log In
               </button>
            )}
         </div>
      );
   };

   return (
      <header className="shadow border-b bg-white sticky top-0 z-50 py-2">
         <div className="flex justify-between bg-white max-w-4xl mx-5 lg:mx-auto">
            <LogoSection />

            <SearchSection />

            <ButtonsSection />
         </div>
      </header>
   );
};

export default Header;
