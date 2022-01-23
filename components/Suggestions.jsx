import { Fragment, useEffect, useState } from "react";
import { getUsers } from "../actions/UserAction";
import Suggestion from "./Suggestion";
import { db } from "../firebase";
import Loading from "./Loading";

const Suggestions = () => {
   const [suggestions, setSuggestions] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const _getUsers = async () => {
      setIsLoading(true);
      const users = await getUsers(5);

      if (users && users.length > 0) {
         setSuggestions(users);
      }
      setIsLoading(false);
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

         {isLoading ? (
            <Loading />
         ) : (
            <Fragment>
               {suggestions.map((profile) => (
                  <Suggestion profile={profile} />
               ))}
            </Fragment>
         )}
      </div>
   );
};

export default Suggestions;
