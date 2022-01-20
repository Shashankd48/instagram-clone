import { useEffect, useState } from "react";
import { getRandomUsers } from "../actions/UtilesAction";
import Image from "next/image";

const Suggestions = () => {
   const [suggestions, setSuggestions] = useState([]);

   const generateFakeUsers = async () => {
      const users = await getRandomUsers(5);

      if (users && users?.results?.length > 0) {
         const tempUsers = [];
         users.results.forEach((user) => {
            tempUsers.push({
               username: user.login.username,
               id: user.login.uuid,
               avatar: user.picture.medium,
               location: `${user.location.city}, ${user.location.country}`,
            });
         });
         setSuggestions(tempUsers);
         console.log(users);
      }
   };

   useEffect(() => {
      generateFakeUsers();
   }, []);

   return (
      <div className="mt-4">
         <div className="flex justify-between text-sm">
            <h2 className="font-semibold text-gray-500">Suggestions for you</h2>
            <button className="font-semibold text-gray-600">See All</button>
         </div>

         {suggestions.map((profile) => (
            <div
               key={profile.id}
               className="flex items-center justify-between mt-3"
            >
               <div className="w-10 h-10 relative">
                  <Image
                     src={profile.avatar}
                     alt="user profile"
                     className="rounded-full border p-[2px]"
                     layout="fill"
                     objectFit="contain"
                  />
               </div>

               <div className="flex-1 ml-4">
                  <h2 className="font-semibold text-sm">{profile.username}</h2>
                  <h3 className="text-xs">Lives in {profile.location}</h3>
               </div>

               <button className="text-xs text-blue-500 font-medium">
                  Follow
               </button>
            </div>
         ))}
      </div>
   );
};

export default Suggestions;
