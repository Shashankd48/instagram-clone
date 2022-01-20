import Image from "next/image";

const Story = ({ img, username }) => {
   return (
      <div className="">
         <div className="h-16 w-16 relative border-red-500 border-2 rounded-full hover:scale-110 transition transform duration-200 ease-out cursor-pointer object-fit">
            <Image
               src={img}
               alt="User avatar"
               className="rounded-full"
               layout="fill"
            />
         </div>
         <p className="text-xs w-16 truncate text-center text-gray-600">
            {username}
         </p>
      </div>
   );
};

export default Story;
