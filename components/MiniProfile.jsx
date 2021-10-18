const MiniProfile = () => {
   return (
      <div className="flex items-center justify-between mt-14 ml-5">
         <img
            src="/user-avatar.jpeg"
            alt="user profile"
            className="rounded-full border p-[2px] w-14 h-14"
         />

         <div>
            <h2>shashankd48</h2>
            <h3>Welcome to intagram</h3>
         </div>

         <button>Log out</button>
      </div>
   );
};

export default MiniProfile;
