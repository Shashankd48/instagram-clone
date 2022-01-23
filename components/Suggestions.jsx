import { useEffect, useState } from "react";
import { getRandomUsers } from "../actions/UtilesAction";
import Image from "next/image";
import { getUsers } from "../actions/UserAction";
import Suggestion from "./Suggestion";
import { db } from "../firebase";

const Suggestions = () => {
   const [suggestions, setSuggestions] = useState([]);

   const _getUsers = async () => {
      const users = await getUsers(5);

      if (users && users.length > 0) {
         let tempUsers = [];
         users.forEach((user) => tempUsers.push(user));

         setSuggestions([...tempUsers, ...suggestions]);
      }
   };

   useEffect(() => {
      _getUsers();
   }, [db]);

   return (
      <div className="mt-4">
         <div className="flex justify-between text-sm">
            <h2 className="font-semibold text-gray-500">Suggestions for you</h2>
            <button className="font-semibold text-gray-600">See All</button>
         </div>

         {suggestions.map((profile) => (
            <Suggestion profile={profile} />
         ))}
      </div>
   );
};

export default Suggestions;
