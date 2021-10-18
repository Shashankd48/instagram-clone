const MiniProfile = () => {
   return (
      <div className="flex items-center justify-between mt-14">
         <div className="flex items-center">
            <img
               src="/user-avatar.jpeg"
               alt="user profile"
               className="rounded-full border p-[2px] w-14 h-14"
            />

            <div className="ml-3">
               <h2 className="font-bold">shashankd48</h2>
               <h3 className="text-sm text-gray-600">Shashank Dubey</h3>
            </div>
         </div>

         <button className="text-blue-400 text-sm font-medium">Log out</button>
      </div>
   );
};

export default MiniProfile;
