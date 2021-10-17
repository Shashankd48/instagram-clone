import Image from "next/image";
import {
   SearchIcon,
   PlusCircleIcon,
   UserGroupIcon,
   HeartIcon,
   MenuIcon,
   PaperAirplaneIcon,
} from "@heroicons/react/outline";

const Header = () => {
   return (
      <header>
         <div className="flex justify-between bg-white max-w-6xl ">
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
      </header>
   );
};

export default Header;
