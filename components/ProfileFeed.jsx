import { useState } from "react";
import PostsIcon from "./Icons/PostsIcon";
import { SmallOutlinedSavedIcon } from "./Icons/SmallOutlinedSavedIcon";
import UserPosts from "./UserPosts";

const tabs = [
   {
      name: "Posts",
      value: "posts",
   },
   {
      name: "Saved",
      value: "saved",
   },
];

const getIcon = (icon, active) => {
   switch (icon) {
      case tabs[0].value:
         return <PostsIcon active={active} />;
      case tabs[1].value:
         return <SmallOutlinedSavedIcon active={active} />;
   }
};

const getComponent = (tab) => {
   switch (tab) {
      case tabs[0].value:
         return UserPosts();
      default:
         return UserPosts();
   }
};

const ProfileFeed = () => {
   const [tab, setTab] = useState(tabs[0].value);

   return (
      <div className="my-3">
         <ul class="flex justify-around uppercase font-medium tracking-widest text-[13px] text-gray-500 w-[250px] m-auto cursor-pointer">
            {tabs.map((item) => (
               <li
                  className={`${
                     tab === item.value ? "text-gray-900" : ""
                  } active:opacity-60 flex items-center`}
                  onClick={() => setTab(item.value)}
               >
                  {getIcon(item.value, tab === item.value ? true : false)}{" "}
                  <span className="ml-2">{item.name}</span>
               </li>
            ))}
         </ul>

         <UserPosts />
      </div>
   );
};

// <div>{getComponent(tab)}</div>

export default ProfileFeed;
