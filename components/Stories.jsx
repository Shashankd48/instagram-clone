import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
   const [suggestions, setSuggestions] = useState([]);

   useEffect(() => {
      const usersList = [...Array(20)].map((_, index) => ({
         ...faker.helpers.contextualCard(),
         id: index,
      }));

      setSuggestions(usersList);
   }, []);

   return (
      <div className="flex space-x-4 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
         {suggestions.map((profile) => (
            <Story
               key={profile.id}
               img={profile.avatar}
               username={profile.username}
            />
         ))}
      </div>
   );
};

export default Stories;
