import Image from "next/image";
import Link from "next/link";

const Story = ({ img, username }) => {
   return (
      <div className="">
         <div className="h-16 w-16 relative border-red-500 border-2 rounded-full hover:scale-110 transition transform duration-200 ease-out cursor-pointer object-fit">
            <Link href={`/${username}`}>
               <a>
                  <Image
                     src={img}
                     alt="User avatar"
                     className="rounded-full"
                     layout="fill"
                  />
               </a>
            </Link>
         </div>
         <p className="text-xs w-16 truncate text-center text-gray-600">
            {username}
         </p>
      </div>
   );
};

export default Story;
