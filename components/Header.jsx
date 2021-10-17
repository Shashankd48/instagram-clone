import Image from "next/image";
import {
   SearchIcon,
   PlusCircleIcon,
   UserGroupIcon,
   HeartIcon,
   MenuIcon,
   PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
   return (
      <header>
         <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
            <div className="relative hidden lg:inline-grid w-24  cursor-pointer">
               <Image
                  src="/instagram_logo.svg"
                  layout="fill"
                  objectFit="contain"
               />
            </div>

            <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
               <Image src="/insta-logo.png" layout="fill" objectFit="contain" />
            </div>

            {/* Middle Section */}
            <div className="max-w-xs">
               <div className="mt-1 relative p-3 rounded-md ">
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

            {/* Right Side */}
            <div className="flex items-center justify-end space-x-4">
               <HomeIcon className="navBtn" />
               <MenuIcon className="h-6 md:hidden cursor-pointer" />

               <div className="relative navBtn ">
                  <PaperAirplaneIcon className="navBtn rotate-45" />
                  <div className="absolute -top-2 -right-2 text-sm bg-red-500 rounded-full flex items-center justify-center h-6 w-6 animate-pulse text-white">
                     3
                  </div>
               </div>

               <PlusCircleIcon className="navBtn" />
               <UserGroupIcon className="navBtn" />
               <HeartIcon className="navBtn" />

               <img
                  src="/user-avatar.jpeg"
                  alt="User Avatar"
                  className="h-8 rounded-full cursor-pointer"
               />
            </div>
         </div>
      </header>
   );
};

export default Header;
