const Story = ({ img, username }) => {
   return (
      <div className="">
         <img
            src={img}
            alt="User avatar"
            className="rounded-full h-16 w-16 p-[1.5px] border-red-500 border-2 cursor-pointer object-fit hover:scale-110 transition transform duration-200 ease-out"
         />
         <p className="text-xs w-16 truncate text-center text-gray-600">
            {username}
         </p>
      </div>
   );
};

export default Story;
