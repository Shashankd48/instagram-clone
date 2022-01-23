import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUsers } from "../actions/UserAction";
import { getRandomUsers } from "../actions/UtilesAction";
import Story from "./Story";

const Stories = () => {
   const [suggestions, setSuggestions] = useState([]);
   const { data: session } = useSession();
   const [isLoading, setIsLoading] = useState(false);

   const generateFakeUsers = async () => {
      const users = await getRandomUsers(20);

      if (users && users?.results?.length > 0) {
         const tempUsers = [];
         users.results.forEach((user) => {
            tempUsers.push({
               username: user.login.username,
               id: user.login.uuid,
               avatar: user.picture.medium,
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
      <div className="flex space-x-4 p-4 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
         {session && (
            <Story
               key={session.user.uid}
               img={session.user.image}
               username={session.user.username}
            />
         )}

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
