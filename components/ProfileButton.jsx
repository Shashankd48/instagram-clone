import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import ProfileIcon from "./Icons/ProfileIcon";
import BookmarkOutlinedIcon from "./Icons/BookmarkOutlinedIcon";

function classNames(...classes) {
   return classes.filter(Boolean).join(" ");
}

const ProfileButton = () => {
   const { data: session } = useSession();
   const router = useRouter();

   return (
      <Menu as="div" className="relative inline-block text-left">
         <div>
            <Menu.Button>
               <img
                  src={session.user.image}
                  alt="User Avatar"
                  className="h-8 rounded-full cursor-pointer"
               />
            </Menu.Button>
         </div>
         <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
         >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
               <div className="py-1 cursor-pointer">
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           onClick={() =>
                              router.push(`/${session.user.username}`)
                           }
                           className={classNames(
                              active
                                 ? "bg-gray-100 text-gray-900"
                                 : "text-gray-700",
                              "block px-4 py-2 text-sm"
                           )}
                        >
                           <div className="flex items-center">
                              <ProfileIcon />
                              <p className="ml-3">Profile</p>
                           </div>
                        </a>
                     )}
                  </Menu.Item>
                  <Menu.Item>
                     {({ active }) => (
                        <a
                           href="#"
                           className={classNames(
                              active
                                 ? "bg-gray-100 text-gray-900"
                                 : "text-gray-700",
                              "block px-4 py-2 text-sm"
                           )}
                        >
                           <div className="flex items-center">
                              <BookmarkOutlinedIcon width={16} height={16} />
                              <p className="ml-3">Saved</p>
                           </div>
                        </a>
                     )}
                  </Menu.Item>

                  <hr />

                  <Menu.Item>
                     {({ active }) => (
                        <button
                           className={classNames(
                              active
                                 ? "bg-gray-100 text-gray-900"
                                 : "text-gray-700",
                              "block w-full text-left px-4 py-2 text-sm"
                           )}
                           onClick={signOut}
                        >
                           Log out
                        </button>
                     )}
                  </Menu.Item>
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   );
};

export default ProfileButton;
