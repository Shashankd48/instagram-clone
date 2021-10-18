import { useEffect, useState } from "react";
import faker from "faker";

const Suggestions = () => {
   const [suggestions, setSuggestions] = useState([]);

   useEffect(() => {
      const usersList = [...Array(5)].map((_, index) => ({
         ...faker.helpers.contextualCard(),
         id: `${index}-sug`,
      }));

      setSuggestions(usersList);
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
               <img
                  src={profile.avatar}
                  alt="user profile"
                  className="w-10 h-10 rounded-full border p-[2px]"
               />

               <div className="flex-1 ml-4">
                  <h2 className="font-semibold text-sm">{profile.username}</h2>
                  <h3 className="text-xs">Works at {profile.company.name}</h3>
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
